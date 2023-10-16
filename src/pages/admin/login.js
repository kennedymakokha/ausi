import React, { useEffect, useState } from 'react';
import Logo from "./aussie-logo.gif"
import { LoginUser, RegisterUser } from '../../redux/actions/auth.action'
import { connect } from 'react-redux'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';

function Login(props) {
    const [isreg, setIsreg] = useState(false)
    const [error, setError] = useState("")
    const [obj, setObject] = useState({
        email: '',
        password: "",
        password_confirm: 'kennedy',
        // list: array,
        // to_mail: "",
        // company: "Aussie-mint Gold Refinery",

        name: "Leon",
        phone_number: "026718618618",
        email: " ceo@clipper - logistics.org",
        organisation: "clipper",
        interest: "mining",
        comment: "",
        password: "Makokha1@",
        confirm_password: " Makokha1@",
    })

    const submit = async () => {
        try {

            if (isreg) {
                await props.RegisterUser(obj)
            }
            else {
                await props.LoginUser(obj)
                window.location.href = "/admin"
            }
        } catch (error) {
            console.log("ERROR", error)
            setError(error)
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        if (user) {
            window.location.href = "/admin"
        }


    }, []);
    return (
        <div className="" style={{ backgroundColor: 'lightgrey', height: '100vh', width: '100hw', overflow: 'hidden', padding: '200px' }}>

            <MDBRow>
                <MDBCol col='6' className="mb-5" style={{}}>
                    {/* <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                           
                            <h4 class="mb-4">We are more than just a company</h4>
                            <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                    </div> */}

                </MDBCol>
                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img src={Logo}
                                style={{ width: '185px' }} alt="logo" />
                            {/* <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4> */}
                        </div>

                        {!isreg && <p>Please login to your account</p>}
                        {error.length !== 0 && <p style={{ color: "red" }}>{error}</p>}

                        {isreg && <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'
                            onChange={(e) => setObject((prevState) => ({
                                ...prevState, name: e.target.value
                            }))}
                        />}
                        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'
                            onChange={(e) => setObject((prevState) => ({
                                ...prevState, email: e.target.value
                            }))} />
                        {isreg && <MDBInput wrapperClass='mb-4' label='Phone Number' id='form1' type='number'
                            onChange={(e) => setObject((prevState) => ({
                                ...prevState, phone_number: e.target.value
                            }))} />}
                        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
                            onChange={(e) => setObject((prevState) => ({
                                ...prevState, password: e.target.value
                            }))} />

                        {isreg && <MDBInput wrapperClass='mb-4' label='Confirm Password ' id='form2' type='password'
                            onChange={(e) => setObject((prevState) => ({
                                ...prevState, confirm_password: e.target.value
                            }))} />}

                        <div className="text-center pt-1 mb-5 pb-1">
                            <div className="mb-4 w-100 gradient-custom-2"
                                onClick={submit}
                            >{isreg ? "Register" : "Sign in"}</div>
                            <a className="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0" onClick={() => setIsreg((prevState) => !prevState)}>{isreg ? "Already have an account " : "Don't have an account?"}</p>
                            <div outline className='mx-2' color='danger' onClick={() => setIsreg((prevState) => !prevState)}>
                                {isreg ? "Login" : " Sign Up"}
                            </div>
                        </div>

                    </div>

                </MDBCol>



            </MDBRow>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {

        loading: state.priceDetails.loading,

        subscribers: state.priceDetails.subscribers,

    };
};

export default connect(mapStateToProps, { LoginUser, RegisterUser })(Login)
