import React, { Component, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import { FetchSubScriberAction, dispatchMails } from '../../redux/actions/data.action'
import { connect } from 'react-redux'
import Modal from "../modals";
import AdminNavBar from "../../components/AdminNavBar";
function Login(props) {


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
        <div style={{ height: '100vh', width: '100vw', display: 'flex' }}>
            <div style={{ height: '100vh', width: '50vw', backgroundColor: '#d2ac67' }}>

            </div>
            <div style={{ height: '100vh', width: '50vw', backgroundColor: "gray", paddingLeft: '100px', paddingRight: '100px', paddingTop: '300px' }}>
                <div style={styles.inputContainer}>
                    {/* <div style={styles.label}>Subject</div> */}
                    <input value={mailobj.subject}
                        placeholder="Email"
                        onChange={(e) => setMailObject((prevState) => ({
                            ...prevState, subject: e.target.value
                        }))}
                        style={styles.input} type="text" />
                </div>
                <div style={styles.inputContainer}>
                    {/* <div style={styles.label}>Subject</div> */}
                    <input value={mailobj.subject}
                        placeholder="Password"
                        onChange={(e) => setMailObject((prevState) => ({
                            ...prevState, subject: e.target.value
                        }))}
                        style={styles.input} type="text" />
                </div>
            </div>

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
    inputContainer: { display: "flex", flexDirection: 'column', marginTop: "10px", marginBottom: "10px" },
    label: { fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', color: 'GrayText' },
    input: { height: '60px', border: 'none', borderRadius: '5px' },
    button: {
        border: 'none',
        borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: "lightpink",
        width: '100px', float: 'right', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', justifyItems: 'center'
    }
}
export default connect(mapStateToProps, { FetchSubScriberAction, dispatchMails })(Login)

