import React, { Component, useState } from "react";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import PhotoGallery from "./components/PhotoGallery";

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

  }
  render() {

    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        {/* <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(assets/Refinaries/Refinary1.jpeg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Project Details</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="projects">Project</a>
                    </li>
                    <li>Project Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  project details page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Projects section start*/}
          <div className="project-section">
            <div className="container">
              <div className="row">
                <div className="col-12 section-space--bottom--40">
                  <div className="project-image">
                    <img
                      src="assets/Refinaries/refinary2.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                {/* <div className="col-lg-4 col-12 section-space--bottom--30">
                  <div className="project-information">
                    <h3>Project Information</h3>
                    <ul>
                      <li>
                        <strong>Client:</strong>{" "}
                        <a href="project-details">RRS Company</a>
                      </li>
                      <li>
                        <strong>Location:</strong> San Francisco
                      </li>
                      <li>
                        <strong>Area(sf):</strong> 550,000 sf
                      </li>
                      <li>
                        <strong>Year:</strong> 2019
                      </li>
                      <li>
                        <strong>Budget:</strong> $245000000
                      </li>
                      <li>
                        <strong>Architect:</strong> Scott &amp; Austin
                      </li>
                      <li>
                        <strong>Sector:</strong>{" "}
                        <a href="project-details">Tunnel</a>,{" "}
                        <a href="project-details">Transport</a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="col-lg-12 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                  <div className="project-details">
                    <h4 className='section-title' style={{ textAlign: 'center', marginBottom: '1px' }}>Refinery Services</h4>
                    <p className="leading-9"> <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Location:</span> Our gold refinery business is strategically located in 2nd Avenue, Parklands, Nairobi, Kenya, ensuring convenient access for our clients and secure transportation of precious metals.
                      <span> <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Licensed Operation:</span> We take pride in being a fully licensed and accredited gold refinery. </span>
                      <span>Our commitment to compliance with industry regulations and ethical standards is unwavering, giving our clients confidence in the authenticity and legitimacy of our operations.</span>
                      <span><span className="text-slate-100"> Our license number is XXX</span></span>
                      <span> <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Expert Qualified Staff:</span> Our refinery boasts a team of expertly qualified and experienced staff members.</span>
                      <span> Our professionals bring a wealth of knowledge and expertise to ensure the precise and efficient processing of precious metals.</span>
                      <span>  <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Processing Capacity:</span> Equipped with state-of-the-art technology, our refinery can process up to 250 kilograms of gold and 350 kilograms of silver, meeting the demands of both individual and industrial clients.</span>
                      <span> Whether you have small or large quantities of precious metals, we have the capacity to handle your needs efficiently and effectively.</span>
                      <span> At Aussiemint, we combine our commitment to excellence, licensed operations, expert staff, and impressive processing capabilities to provide our clients with top-tier gold and silver refining services.</span>
                    </p>

                    <h4 className='section-title' style={{ textAlign: 'center', marginBottom: '1px' }}>Refinery Statistics</h4>
                    <p> Our longevity in the business speaks to our deep understanding of the nuances and intricacies of refining gold and silver, ensuring that our clients receive the highest quality service and results.
                      <span> <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Market Reputation:</span>Our market reputation is built on a foundation of integrity, precision, and customer satisfaction. </span>
                      <span>We have consistently delivered on our promises, maintaining the highest ethical standards in our operations</span>
                      <span>This commitment to quality has earned us the trust and respect of clients, leading to positive word-of-mouth referrals and enduring partnerships.</span>
                      <span> <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Network Coverage (Africa & the World):</span>As a global player in the precious metals refining industry, Aussiemint has established an extensive network that spans not only across Africa but also around the world. </span>
                      <span>Our reach allows us to serve clients from various corners of the globe, facilitating secure and efficient transactions</span>
                      <span>  <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>In Africa: :</span> We have a strong presence in key African markets, leveraging our local expertise to cater to the unique needs of each region.</span>
                      <span>This includes partnerships with mining operations, jewelers, and financial institutions, making us a preferred choice for businesses and individuals seeking reliable refining services in Africa.</span>
                      <span> <span className="font-bold text-gold" style={{ color: "#d2ac67", fontWeight: 'bold' }}>Internationally:</span>: Our global network extends beyond Africa to encompass major international hubs. </span>
                      <span>We collaborate with refineries, distributors, and traders worldwide, ensuring that our clients can access a broad spectrum of markets and opportunities.</span>
                      <span>This international presence allows us to </span></p>
                  </div>
                </div>
                <div className="col-12">
                  <PhotoGallery />
                </div>

              </div>
            </div>
          </div>
          {/*Projects section end*/}
        </div>
        <div className="  col-lg-12" style={{ paddingTop: '20px', paddingBottom: '20px', display: 'flex', }} >
          <div className="container center" style={{ display: "flex", gap: "20px" }}>
            <div className="button center" style={{ width: '400px' }}>
              <a
                href={`${process.env.PUBLIC_URL}/contact-us`}
                className="see-more-link"
              >Schedule assay Report</a> </div>
            <div className="button center" style={{ width: '400px' }}>
              <a
                href={`${process.env.PUBLIC_URL}/contact-us`}
                className="see-more-link"
              >
                Get MOre Info
              </a></div>

          </div>
        </div>

       
        {/*====================  End of project details page content  ====================*/}

        {/* Brand logo */}
        <BrandLogoSlider background="grey-bg" />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Projects;
