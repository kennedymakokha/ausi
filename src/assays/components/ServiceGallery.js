import React, { Component } from 'react';
import SwiperSlider, { SwiperSlide } from "../../components/swiper";

class ServiceGallery extends Component{
    render(){
                
        /* service image gallery slider params*/

        const params = {
            slidesPerView : 1,
            loop: true,
            navigation: true
        };

        /* service image gallery data */

        let imageGalleryData = [
            {img: 'assay1.jpeg'},
            {img: 'assay2.jpeg'},
            {img: 'assay3.jpeg'},
           
        ];

        
        /* service image gallery component */

        let ImageGalleryDataList = imageGalleryData.map((val, i) => {
            return(
                <SwiperSlide className="service-gallery__single-slide" key={i}>
                    <div className="item">
                        <img src={`assets/assay/${val.img}`} className="img-fluid" alt="gallery data" />
                    </div>
                </SwiperSlide>
            )
        });


        return(
            <div>
                <div className="service-gallery">
                    <SwiperSlider options={params}>
                        {ImageGalleryDataList}
                    </SwiperSlider>
                </div>
            </div>
        )
    }
}

export default ServiceGallery;