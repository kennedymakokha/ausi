import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Funfact extends Component {
  state = {
    didViewCountUp: false
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    let data = [
      { img: "funfact-project.png", countNum: 18, countTitle: "Experience" },
      { img: "funfact-clients.png", countNum: 128, countTitle: "Clients" },
      { img: "funfact-success.png", countNum: 114, countTitle: "Cases" },
      { img: "funfact-award.png", countNum: 109, countTitle: "Pro Consultation" }
    ];

    let DataList = data.map((val, i) => {
      return (
        <div
          className="single-fact col-md-3 col-6 section-space--bottom--30"
          key={i}
        >
          <img src={`assets/img/icons/${val.img}`} alt="" />
          <h1 className="counter">
            <VisibilitySensor
              onChange={this.onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp end={this.state.didViewCountUp ? val.countNum : 0} />
            </VisibilitySensor>
          </h1>
          <h4>{val.countTitle}</h4>
        </div>
      );
    });

    return (
      <div>
        {/*====================  fun fact area ====================*/}
        <div
          className="funfact-section section-space--inner--100 funfact-bg"
          style={{
            backgroundImage: `url(assets/assets/refinaries/globe.jpg)`,
            paddingTop: '50px' ,paddingBottom: '50px' 
          }}
          // style={{ }}
        >
          <div className="container" >
            <div className="row">
              <div className="col-lg-12">
                <div className="fun-fact-wrapper">
                  <div className="row">{DataList}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ color: "white", paddingTop: '40px', fontSize: "16px", textAlign: 'center' }}>
            <p> <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Network Coverage (Africa & the World):</span>As a global player in the precious metals refining industry, Aussiemint has established an extensive network that spans not only across Africa but also around the world.
              <span> Our reach allows us to serve clients from various corners of the globe, facilitating secure and efficient transactions</span>
              <span>  <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Internationally:</span> Our global network extends beyond Africa to encompass major international hubs. </span>
              <span> We collaborate with refineries, distributors, and traders worldwide, ensuring that our clients can access a broad spectrum of markets and opportunities.</span>
              <span> This international presence allows us to </span></p>
          </div>
        </div>

        {/*====================  End of fun fact area  ====================*/}
      </div>
    );
  }
}

export default Funfact;
