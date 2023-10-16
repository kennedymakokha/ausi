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
      {isOpen && <Modal setIsOpen={setIsOpen} submit={submit} mailobj={mailobj} setMailObject={setMailObject} />}
      <div className="page-wrapper section-space--inner--120">
        {/*Contact section start*/}
        <div className="conact-section">
          <div className="container">
            <div className="row section-space--bottom--50">
              <div className="col">
                <div style={{
                  borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: 'red',
                  width: '200px', float: 'right', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', justifyItems: 'center'
                }}
                  onClick={() => setIsOpen(true)}
                >Dispatch Mail to {array.length}</div>
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
                        <th>
                          <input
                            type="checkbox"
                            // checked={checkboxState}
                            value="Item 2"
                            onChange={() => modifyProperty(subscriber.email)}
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

export default connect(mapStateToProps, { FetchSubScriberAction, dispatchMails })(Subscribers)

