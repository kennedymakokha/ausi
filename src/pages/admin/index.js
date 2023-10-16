import React, { Component, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import { FetchSubScriberAction, dispatchMails } from '../../redux/actions/data.action'
import { connect } from 'react-redux'
import Modal from "../modals";
import AdminNavBar from "../../components/AdminNavBar";
function Subscribers(props) {


    const [array, setArray] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [mailobj, setMailObject] = useState({
        subject: '',
        msg: "",
        name: 'kennedy',
        list: array,
        to_mail: "",
        company: "Aussie-mint Gold Refinery"
    })
    const modifyProperty = (target) => {
        const result = array.filter(dat => !dat.includes(target));
        // console.log(includes(target))
        if (array.includes(target)) {
            let i = array.indexOf(target);
            let newArray = array.splice(i, 1);
            setArray(newArray)

            return
        } else {
            setArray([...array, target])
        }

    };
    const submit = async () => {
        try {
            mailobj.list = array
            await props.dispatchMails(mailobj)

        } catch (error) {

        }
    }

    useEffect(() => {

        props.FetchSubScriberAction()


    }, []);

    return (
        <div>
            {/* Navigation bar */}
            <AdminNavBar />

            <div className="page-wrapper section-space--inner--120">
                {/*Contact section start*/}
                <div className="conact-section">
                    <div className="container">
                        <div className="row section-space--bottom--50">
                            <div className="col" style={{ display: "flex", flexWrap: 'wrap', gap: '10px', }}>
                                <div className="col-4" style={styles.cardContainer}>
                                    <div style={styles.contentContainer}>
                                        <div style={styles.titleContainer}>
                                            SubScribers
                                        </div>
                                        <div style={styles.valueContainer}>
                                            {props.subscribers.length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Mobile Menu */}
            <MobileMenu />
        </div>
    );
}


const mapStateToProps = (state) => {
    return {

        loading: state.priceDetails.loading,

        subscribers: state.priceDetails.subscribers,

    };
};


const styles = {
    cardContainer: { display: 'flex', height: '100px', border: 'dotted gray 1px', width: '24%', borderRadius: '10px', alignItems: 'center', justifyContent: 'center', },
    contentContainer: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' },
    titleContainer: { text: "white", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '26px' },
    valueContainer: { text: "white", fontWeight: 'bold', textTransform: 'uppercase', }
}
export default connect(mapStateToProps, { FetchSubScriberAction, dispatchMails })(Subscribers)

