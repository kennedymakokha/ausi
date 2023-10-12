import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'

class VideoCta extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <div>
                {/*====================  video cta area ====================*/}
                <div className="video-cta-area "
                    style={{ paddingTop: '20px', paddingBottom: '50px' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <h3 style={{ textAlign: 'center', paddingBottom: '20px', color: 'gray' }}>Aussiemint - a leading Refinery in Africa</h3>
                            <div className="col-lg-6 col-md-6">
                                <div className="video-cta-content">

                                    <h2 className='section-title' style={{ textAlign: 'center', marginBottom: '1px' }}>Our Refineries</h2>

                                    {/* <h3 className="video-cta-content__title">We are Best construction in the world</h3> */}
                                    <p className="video-cta-content__text" style={{ textAlign: 'justify' }}>
                                        Being investors in precious metals ourselves, we understand the kind of liquidity and stored value potential that comes with gold, silver and other precious metals.
                                        <span className="video-cta-content__text"> We apply this pragmatic understanding to all our dealings with our customers.</span>
                                        <span className="video-cta-content__text">Whether you’re looking to buy or sell your precious metals, we are a gold refiner and silver refinery you can rely on, for fair valuations. It helps to know that you aren’t too far from reaching out to a reliable gold refinery in East Africa, when it comes to your need for quality bullion-related services.</span>
                                        <span className="video-cta-content__text">
                                            As a trusted gold and silver refinery High Profile investors can trust, you know you’re in safe hands when you buy or sell with Aussie-mint.
                                        </span></p>
                                    <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--round">CONTACT US</a>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-6">
                                <div className="cta-video-image">
                                    <div className="video-popup">
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='2PHXJf6sxes' onClose={() => this.setState({ isOpen: false })} />
                                        <button onClick={this.openModal}>
                                            <div className="cta-video-image__image">
                                                <img src="assets/assets/refinaries/refinary_1.jfif" className="img-fluid" alt="" />
                                            </div>
                                            <div className="cta-video-image__icon">
                                                <i className="ion-ios-play" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of video cta area  ====================*/}
            </div>
        )
    }
}


export default VideoCta;