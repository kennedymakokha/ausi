import React, { Component, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { AddSubScriberAction } from '../redux/actions/data.action'
import { connect } from 'react-redux'
function Subcribe(props) {
    const [body, setBody] = useState({
        email: "",
        alert: false,
        error: false,
        errorMsg: ""
    })


    const Submit = async () => {
        try {
            await props.AddSubScriberAction(body)
            alert("Subscription successful")
            setBody((prevState) => ({
                ...prevState, error: false, alert: true, name: "", email: "", msg: "",
            }))

        } catch (error) {
            alert(error)

        }

    }
    const { error } = body
    return (
        <div className='subScribe_container' >
            <div className='container center' >
                <div>
                    <h2 style={{ color: 'white' }}>

                        Subscribe for <span className="text-gold">Newsletter</span> </h2>

                </div>
                <div className='textInput'>
                    <input type="text" value={body.emailp} name="email" onChange={(e) => setBody((prevState) => ({
                        ...prevState, email: e.target.value
                    }))} className='textInput' />
                    <div style={{ color: "white", fontWeight: 'bolder', paddingLeft: '10px', backgroundColor: '#d2ac67', paddingRight: '10px' }}
                        onClick={() => Submit()}>Submit</div>
                </div>

            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {

        loading: state.priceDetails.loading,

        // error: state.userDetails.error,

    };
};

export default connect(mapStateToProps, { AddSubScriberAction })(Subcribe)

