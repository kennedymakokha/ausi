import React, { Component, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import { FetchUserFeedback, respondtoFeed, FetchUserFeedsResponce } from '../../redux/actions/data.action'
import { connect } from 'react-redux'
import Modal from "../modals";
import AdminNavBar from "../../components/AdminNavBar";
import Feedbackmodal from "../modals/feedbackResponse";
function Subscribers(props) {


  const [array, setArray] = useState([]);
  const [feedback, setfeedback] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [mailobj, setMailObject] = useState({

    msg: "",
    to_mail: feedback?.email,
    originalmsg: feedback?._id,
    company: "Aussie-mint Gold Refinery"
  })

  const submit = async () => {
    try {

      setMailObject((prevState) => ({
        ...prevState, to_mail: feedback?.email, originalmsg: feedback?._id,
      }))
      let data = mailobj
      data.to_mail = feedback?.email
      data.originalmsg = feedback?._id

      await props.respondtoFeed(data)
      setIsOpen(false)

    } catch (error) {

    }
  }

  useEffect(() => {

    props.FetchUserFeedback("Aussie-mint Gold Refinery")
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) {
      window.location.href = "/admin/login"
    }

  }, []);

  return (
    <div>
      {/* Navigation bar */}
      <AdminNavBar />
      {isOpen && <Feedbackmodal setIsOpen={setIsOpen} submit={submit} mailobj={mailobj} feedback={feedback} setMailObject={setMailObject} />}
      <div className="page-wrapper section-space--inner--120">
        {/*Contact section start*/}
        <div className="conact-section">
          <div className="container">
            <div className="row section-space--bottom--50">
              <div className="col">

                <table className="table responsive">

                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email Address</th>
                      <th>Message</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.feedBacks.map((subscriber, i) => (
                      <tr key={i} onClick={async () => { setIsOpen(true); setfeedback(subscriber); await props.FetchUserFeedsResponce(subscriber._id) }}>
                        <td>{i + 1}</td>
                        <td>{subscriber.name}</td>
                        <td>{subscriber.email}</td>
                        <td>{subscriber.msg}</td>
                        <th>
                          {/* <input
          type="checkbox"
          // checked={checkboxState}
          value="Item 2"
         
        /> */}
                        </th>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {

    loading: state.priceDetails.loading,
    feedBacks: state.priceDetails.feedBacks,
    subscribers: state.priceDetails.subscribers,

  };
};

export default connect(mapStateToProps, { FetchUserFeedback, respondtoFeed, FetchUserFeedsResponce })(Subscribers)

