import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import HeroSliderOne from '../components/HeroSliderOne';
import ServiceGridSlider from '../components/ServiceGridSlider';
import Funfact from '../components/Funfact';
import VideoCta from '../components/VideoCta';
import ProjectSlider from '../components/ProjectSlider';
import TeamJob from '../components/TeamJob';
import TestimonialSlider from '../components/TestimonialSlider';
import BlogGrid from '../components/BlogGrid';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import WeeklyStats from '../components/weeklystats';
import InvestorTrust from '../components/investorTrust';


class HomeOne extends Component {
    render() {

        return (
            <div>

                {/* Navigation bar */}
                <NavBar />

                {/* Hero slider */}
                <HeroSliderOne />

                {/* Service grid slider */}
                {/* <ServiceGridSlider/> */}



                {/* Video CTA */}
                <VideoCta />
                {/* Fun fact */}
                <Funfact />
                {/* Blog grid */}
                <WeeklyStats background="grey-bg" />
                {/* Testimonial Slider */}
                <InvestorTrust />


                {/* Brand logo */}
                <BrandLogoSlider />
                {/* Project Slider */}
                {/* <ProjectSlider /> */}

                {/* Team job */}
                {/* <TeamJob /> */}

                {/* Testimonial Slider */}
                {/* <TestimonialSlider /> */}

                {/* Blog grid */}
                {/* <BlogGrid background="grey-bg" /> */}


                {/* Footer */}
                <Footer />

            </div>
        )
    }
}


export default HomeOne;