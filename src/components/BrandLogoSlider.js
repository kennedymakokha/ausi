import React, { Component } from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper";

class BrandLogoSlider extends Component {
    render() {

        const params = {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            // Responsive breakpoints
            breakpoints: {
                576: {
                    slidesPerView: 3

                },
                992: {
                    slidesPerView: 4
                }
            }
        }

        let data = [
            { img: 'Logo-sampl--02.png', logoLink: '/' },
            { img: 'Logo-sampl--03.png', logoLink: '/' },
            { img: 'Logo-sampl--05.png', logoLink: '/' },
            { img: 'Logo-sampl--04.png', logoLink: '/' },
            // {img: 'Logo Rede/sign-05.png', logoLink: '/'},

        ];

        let DataList = data.map((val, i) => {
            return (
                <SwiperSlide key={i}>
                    <div className="brand-logo-slider__single">
                        <div className="image text-center">
                            <a href={val.logoLink}>
                                <img src={`assets/assets/clients/${val.img}`} style={{ height: "100px" }} className="img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });


        return (
            <div>
                {/*====================  brand logo area ====================*/}
                <div className={`brand-logo-slider-area  ${this.props.background}`}
                    style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* brand logo slider */}
                                <div className="brand-logo-slider__container-area">
                                    <SwiperSlider options={params}>
                                        {DataList}
                                    </SwiperSlider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of brand logo area  ====================*/}
            </div>
        )
    }
}

export default BrandLogoSlider;