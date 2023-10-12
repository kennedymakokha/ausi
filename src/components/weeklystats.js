import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getApiData } from '../redux/actions/data.action'

function WeeklyStats(props) {
    const [data, setPrices] = useState({});

    useEffect(() => {
        setPrices(props.data1)
        props.getApiData();
    }, [props.data1]);
    useEffect(() => {

        //Implementing the setInterval method
        const interval = setInterval(() => {

            props.getApiData();
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, []);
   
    return (
        <div>
            {/*====================  blog grid area ====================*/}
            < div
                style={{ paddingTop: '50px', paddingBottom: '70px' }}
                className={`blog-grid-area section-space--inner--120 ${props.background}`}>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="blog-grid-wrapper">
                                <div className="row">
                                    <div className="col-lg-4" >
                                        <div className="blog-post-slider__single-slide blog-post-slider__single-slide--grid-view" style={{ border: "1px solid", padding: "10px", height: '210px', }}>
                                            <h4 className='section-title' style={{ textAlign: 'center', marginBottom: '1px' }}></h4>
                                            <div className="blog-post-slider__content center" style={{ flexDirection: 'column', fontWeight: 'bold', }}>

                                                <h3 style={{ color: '#d2ac67', textTransform: 'uppercase' }}>Gold Price</h3>
                                                <h1 style={{ color: '#d2ac67' }}>{(props?.prices?.price_gram_24k * 1000).toFixed(2)}</h1>
                                                <h4 style={{ color: '#d2ac67' }}>Per KG</h4>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4" >
                                        <div className="blog-post-slider__single-slide blog-post-slider__single-slide--grid-view" style={{ border: "1px solid", padding: "10px", height: '210px', }}>
                                            <h4 className='section-title' style={{ textAlign: 'center', marginBottom: '1px' }}></h4>
                                            <div className="blog-post-slider__content center" style={{ flexDirection: 'column', fontWeight: 'bold', }}>

                                                <h3 style={{ color: '#d2ac67', textTransform: 'uppercase' }}>Daily Refinaries</h3>
                                                <div style={{ width: '100%', paddingRight: '50px', paddingLeft: '50px' }}>
                                                    <table style={{ width: '100%', }}>
                                                        <tr style={{ borderBottom: '2px solid #d2ac67', width: '100%', lineHeight: '40px' }}>
                                                            <td>Gold</td>
                                                            <td>30</td>
                                                        </tr>
                                                        <tr style={{ borderBottom: '2px solid #d2ac67', width: '100%', lineHeight: '40px' }}>
                                                            <td>Silver</td>
                                                            <td>60</td>
                                                        </tr>
                                                        <tr style={{ width: '100%', lineHeight: '40px' }}>
                                                            <td>Precious Stones</td>
                                                            <td>10</td>
                                                        </tr>
                                                    </table>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4" >
                                        <div className="blog-post-slider__single-slide blog-post-slider__single-slide--grid-view" style={{ border: "1px solid", height: '210px', padding: "10px" }}>
                                            <h4 className='section-title' style={{ textAlign: 'center', marginBottom: '1px' }}></h4>
                                            <div className="blog-post-slider__content center" style={{ flexDirection: 'column', fontWeight: 'bold', }}>

                                                <h3 style={{ color: '#d2ac67', textTransform: 'uppercase' }}>Weekly  Distibutions</h3>
                                                <div style={{ width: '100%', paddingRight: '50px', paddingLeft: '50px' }}>
                                                    <table style={{ width: '100%', }}>
                                                        <tr style={{ width: '100%', lineHeight: '40px' }}>
                                                            <td>Jewellers</td>
                                                            <td>20</td>
                                                        </tr>
                                                        <tr style={{ width: '100%', lineHeight: '40px' }}>
                                                            <td>Miners</td>
                                                            <td>10</td>
                                                        </tr>
                                                        <tr style={{ width: '100%', lineHeight: '40px' }}>
                                                            <td>Traders</td>
                                                            <td>0</td>
                                                        </tr>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/*====================  End of blog grid area  ====================*/}

        </div >)
}

const mapStateToProps = (state) => {
    return {

        loading: state.priceDetails.loading,
        prices: state.priceDetails.prices,
        error: state.priceDetails.error,

    };
};

export default connect(mapStateToProps, { getApiData })(WeeklyStats)
