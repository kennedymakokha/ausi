import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "./swiper";
import { EffectFade } from "swiper";

class InvestorTrust extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      autoplay: false,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      modules: [EffectFade]
    };
    let data = [
      {
        testimonialImage: "1.jpg",
        testimonialName: "Madison Black",
        testimonialDesignation: "Founder",
        testimonialText:
          "Lorem ipsum dolor sit amet, consectetur adipisi elit sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      },
      {
        testimonialImage: "3.jpg",
        testimonialName: "Jonathon Doe",
        testimonialDesignation: "Engineer",
        testimonialText:
          "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet."
      },
      {
        testimonialImage: "2.jpg",
        testimonialName: "John Doe",
        testimonialDesignation: "CEO",
        testimonialText:
          "consectetur adipisi elit sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      }
    ];

    let DataList = data.map((val, i) => {
      return (
        <SwiperSlide key={i}>
          <div className="testimonial-slider__single-slide">
            <div className="author">
              <div className="author__image">
                <img
                  src={`assets/img/testimonial/${val.testimonialImage}`}
                  alt=""
                />
              </div>
              <div className="author__details">
                <h4 className="name">{val.testimonialName}</h4>
                <div className="designation">{val.testimonialDesignation}</div>
              </div>
            </div>
            <div className="content">{val.testimonialText}</div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div>
        {/*====================  testimonial slider area ====================*/}

        <div
          className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120"
          style={{
            backgroundImage: `url(assets/assets/images/Trust.png)`
          }}
        >

          <div className="container" >
            <h2 className='section-title' style={{ textAlign: 'center', marginBottom: '1px' }}>Investor Trust</h2>
            <div className="row" >
              <div className="col-lg-6">
                <div className="testimonial-slider " style={{ color: "white", paddingTop: '40px', fontSize: "16px" }}>
                  <p> <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Network Coverage (Africa & the World):</span>As a global player in the precious metals refining industry, Aussiemint has established an extensive network that spans not only across Africa but also around the world.
                    <span>Our reach allows us to serve clients from various corners of the globe, facilitating secure and efficient transactions</span>
                    <span> <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Internationally:</span> Our global network extends beyond Africa to encompass major international hubs. </span>
                    <span>We collaborate with refineries, distributors, and traders worldwide, ensuring that our clients can access a broad spectrum of markets and opportunities.</span>
                    <span>This international presence allows us to </span></p>

                  {/* <div className="testimonial-slider__container-area">
                    <SwiperSlider options={params}>{DataList}</SwiperSlider>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6" >


              </div>
            </div>
          </div>
        </div>
        {/*====================  End of testimonial slider area  ====================*/}
      </div >
    );
  }
}

export default InvestorTrust;
