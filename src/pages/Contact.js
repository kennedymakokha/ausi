import React, { Component, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { contactFormAction } from '../redux/actions/data.action'
import { connect } from 'react-redux'
function Contact(props) {
  const [body, setBody] = useState({
    name: "", email: "", msg: "",
    alert: false,
    error: false,
    errorMsg: ""
  })


  const Submit = async () => {
    try {
      await props.contactFormAction(body)
      setBody((prevState) => ({
        ...prevState, error: false, alert: true, name: "", email: "", msg: "",
      }))
      const timer = setTimeout(() => {
        setBody((prevState) => ({
          ...prevState, alert: false, name: "", email: "", msg: "",
        }))
      }, 1000);
      return () => clearTimeout(timer);
    } catch (error) {

      setBody((prevState) => ({
        ...prevState, error: true, errorMsg: error, alert: true,

      }))

    }

  }
  const { error } = body
  return (
    <div>
      {/* Navigation bar */}
      <NavBar />

      {/* breadcrumb */}
      {/*====================  breadcrumb area ====================*/}
      {/* <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(assets/img/backgrounds/funfact-bg.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Contact Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/*====================  End of breadcrumb area  ====================*/}

      {/*====================  content page content ====================*/}
      <div className="page-wrapper section-space--inner--120">
        {/*Contact section start*/}
        <div className="conact-section">
          <div className="container">
            <div className="row section-space--bottom--50">
              <div className="col">
                <div className="contact-map">
                  <iframe
                    title="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.85168283229!2d36.81449517496565!3d-1.2612513987267424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171bcc6114cd%3A0x3842565cf6238554!2sAmani%20Plaza!5e0!3m2!1ssw!2ske!4v1695290485464!5m2!1ssw!2ske"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="contact-information">
                  <h3>Contact Information</h3>
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="ion-android-map" />
                      </span>
                      <span className="text">
                        <span>
                          2nd Parklands Avenue
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="ion-ios-telephone-outline" />
                      </span>
                      <span className="text">
                        <a href="tel:1234567890">(+254) 788 283 594</a>
                        <a href="tel:1234567890">(+254) 788 283 594</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="ion-ios-email-outline" />
                      </span>
                      <span className="text">
                        <a href="mailto:info@aussiemint.com">info@aussiemint.com</a>
                        <a href="mailto:info@aussiemint.com">info@aussiemint.com</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-12">
                <div className="contact-form">
                  <h3>Leave Your Message</h3>
                  {body.alert && <div style={{ height: '30px', fontWeight: 'bold', color: 'black', width: '90%', backgroundColor: error ? "lightpink" : 'lightcyan', margin: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>{error ? body.errorMsg : "Message Sent"} </div>}
                  <div id="contact-form">
                    <div className="row row-10">
                      <div className="col-md-6 col-12 section-space--bottom--20">
                        <input
                          name="name"
                          value={body.name}
                          onChange={(e) => setBody((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value
                          }))}
                          type="text"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-md-6 col-12 section-space--bottom--20">
                        <input
                          name="email"
                          value={body.email}
                          onChange={(e) => setBody((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value
                          }))}
                          type="email"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="msg"
                          value={body.msg}
                          onChange={(e) => setBody((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value
                          }))}
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <button

                          onClick={() => Submit()}
                        >{props.loading ? "Sending mail" : "Send Message"}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Contact section end*/}
      </div>
      {/*====================  End of content page content  ====================*/}

      {/* Footer */}
      <Footer />

      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {

    loading: state.priceDetails.loading,

    // error: state.userDetails.error,

  };
};

export default connect(mapStateToProps, { contactFormAction })(Contact)

