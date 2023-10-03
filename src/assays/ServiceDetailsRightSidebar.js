import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ServiceGallery from "./components/ServiceGallery";
class ServiceDetailsRightSidebar extends Component {
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
            backgroundImage: `url(assets/assay/assay3.jpeg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Assay Details</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/assay`}>
                        Assays
                      </a>
                    </li>
                    <li>Assay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12 order-1">
                  <div className="service-details">
                    {/* service gallery */}
                    <ServiceGallery />
                    <div className="content section-space--top--30">
                      <div className="row">
                        <div className="col-12">
                          <h2>
                            Methodology</h2>
                          <p className="text-justify text-xl ">
                            With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.
                          </p>
                          <p className="text-justify text-xl ">
                            The refining process is the oxidative leaching step. Gold and platinum group metals (PGM) containing in a bullion/slime are leached in a solution of hydrochloric acid. Dissolution of the precious metals is catalyzed by addition of an oxidation agent to the slurry. In contrast to gold and PGMs, silver forms a low soluble silver chloride that precipitates during oxidative leaching. We perform the leaching operation in either a glass lined or titanium reactor.
                          </p>
                          <p className="text-justify text-xl ">
                            The silver chloride precipitate is then filtered, cemented and transferred to silver refinery or recycled to smelting operation to produce silver Doré anodes for electrorefining where its pumped to the precipitation tank for precipitation of elementary gold.
                          </p>
                        </div>
                        <div className="col-lg-4 col-12 section-space--top--30" style={{  justifyContent:"center",alignItems:'center',display:'flex',padding:'30px',backgroundColor: '#d2ac67' }}>
                        <p className="text-slate-300 text-xl">With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.</p>
                        </div>
                        <div className="col-lg-4 col-12 section-space--top--30" style={{  justifyContent:"center",alignItems:'center',display:'flex',padding:'30px',backgroundColor: '#000', color: "white" }}>

                        <p>With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.</p>
                      
                        </div>
                        <div className="col-lg-4 col-12 section-space--top--30" style={{  justifyContent:"center",alignItems:'center',display:'flex',padding:'30px',backgroundColor: '#d2ac67' }}>

                        <p className="text-slate-300 text-xl">With our advanced equipment of latest technology we can greatly pre-leach and remove impurities of base metals from atomized gold bullion and silver anode slime.</p>
                       
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-12 order-2">
                  <Sidebar />
                </div> */}
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

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

export default ServiceDetailsRightSidebar;
