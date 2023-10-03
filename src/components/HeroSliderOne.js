import React, { Component } from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper"

class HeroSliderOne extends Component {

    render() {
        const params = {
            slidesPerView: 1,
            loop: true,
            navigation: true,
            autoplay: {
                delay: 5500,
                disableOnInteraction: false,
            },
        }

        let data = [
            { bgImg: 'Slider-img.jpg', sliderTitle: 'Established Mineral Network in Africa & Globally', sliderSubtitle: "", btnLink: 'refinery' },
            { bgImg: 'Slider-img-2.jpg', sliderTitle: 'Well Equipped Assets with Competent Mineral Experts', sliderSubtitle: "", btnLink: 'refinery' },
            { bgImg: "Slider-img-3.jpg", sliderTitle: 'Mineral Value Addition through Precise Results', sliderSubtitle: "", btnLink: 'refinery' }
        ];

        let DataList = data.map((val, i) => {
            return (
                <SwiperSlide key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/assets/${val.bgImg})` }} >
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-slider__content">
                                            <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                                            <p className="hero-slider__text">{val.sliderSubtitle}</p>
                                            <a className="hero-slider__btn" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}> GET STARTED NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });

        return (
            <div>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <SwiperSlider options={params}>
                        {DataList}
                    </SwiperSlider>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderOne;