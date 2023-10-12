import React, { Component, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { FetchSubScriberAction } from '../redux/actions/data.action'
import { connect } from 'react-redux'
function Subscribers(props) {



  useEffect(() => {
    props.FetchSubScriberAction()

  }, []);
  console.log(props.subscribers)
  return (
    <div>
      {/* Navigation bar */}
      <NavBar />

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
                      <th>Email Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.subscribers.map((subscriber, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{subscriber.email}</td>
                        <th> <input type="checkbox" /></th>
                      </tr>
                    ))}
                  </tbody>

                </table>
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

export default connect(mapStateToProps, { FetchSubScriberAction })(Subscribers)

