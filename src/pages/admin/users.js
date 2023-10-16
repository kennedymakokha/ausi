import React, { Component, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import { FetchUserFeedback, dispatchMails } from '../../redux/actions/data.action'
import { connect } from 'react-redux'
import Modal from "../modals";
import AdminNavBar from "../../components/AdminNavBar";
function Users(props) {





  useEffect(() => {

    props.FetchUserFeedback()
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      window.location.href = "/admin/login"
    }

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
              <div className="col">

                <table className="table responsive">

                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email Address</th>
                      <th>Phone</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.users.map((subscriber, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{subscriber.name}</td>
                        <td>{subscriber.email}</td>
                        <td>{subscriber.phone_number}</td>
                        <th>
                          <input
                            type="checkbox"
                            // checked={checkboxState}
                            value="Item 2"

                          />
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
      {/* <Footer /> */}

      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {

    loading: state.priceDetails.loading,
    feedBacks: state.priceDetails.feedBacks,
    users: state.userDetails.users,
    subscribers: state.priceDetails.subscribers,

  };
};

export default connect(mapStateToProps, { FetchUserFeedback, dispatchMails })(Users)

