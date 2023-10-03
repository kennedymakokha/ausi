import React, { Component } from 'react';

class WeeklyStats extends Component {
    render() {
        let data = [
            { img: '1.jpg', date: 'AUGUST 4, 2019', title: 'Gold Prices', postExcerpt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex.…', link: 'blog-details-left-sidebar' },
            {
                img: '2.jpg', atrr: [

                    {
                        title: "Gold",
                        value: 10,
                    }, {
                        title: "Silver",
                        value: 5,
                    },
                    {
                        title: " Precious Stones",
                        value: 10,
                    }

                ], date: 'AUGUST 5, 2019', title: 'Daily Refinery', postExcerpt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex.…', link: 'blog-details-left-sidebar'
            },
            {
                img: '3.jpg', atrr: [

                    {
                        title: "Jewellers",
                        value: 20,
                    }, {
                        title: "Miners",
                        value: 5,
                    },
                    {
                        title: "Traders",
                        value: 10,
                    }
                ], date: 'AUGUST 6, 2019', title: 'Weekly Distribution', postExcerpt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex.…', link: 'blog-details-left-sidebar'
            }



        ];

        let DataList = data.map((val, i) => {
            return (
                <div className="col-lg-4" key={i} style={{ border: "1px solid", padding: "10px" }}>
                    <div className="blog-post-slider__single-slide blog-post-slider__single-slide--grid-view">
                        <h4 className='section-title' style={{ textAlign: 'center', marginBottom: '1px' }}>{val.title}</h4>
                        <div className="blog-post-slider__content">
                            {val.atrr ? <table style={{ fontSize: "24px", width: "100%", gap: '2px' }}>

                                {val?.atrr?.map((at, i) => (
                                    <tr style={{ border: "1px" }} key={i}>
                                        <td>
                                            {at?.title}:
                                        </td>
                                        <td>{at?.value}</td>
                                    </tr>
                                ))}


                            </table> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', justifyItems: 'center', alignContent: 'center' }}>
                                <div style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'lightgreen', color: 'white', borderRadius: "15px" }}>60281.20</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>PER KG</div>
                                </div>

                            </div>}
                            {/* <ul style={{ listStyle: 'none', fontSize: '28px', fontWeight: 'bold', lineHeight: '45px' }}>
                                {val?.atrr?.map((at, i) => (
                                    <li>
                                        {at?.title}:{at?.value}
                                    </li>
                                ))}
                            </ul> */}

                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                {/*====================  blog grid area ====================*/}
                < div
                    style={{ paddingTop: '50px', paddingBottom: '70px' }}
                    className={`blog-grid-area section-space--inner--120 ${this.props.background}`}>
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
                                                    <h1 style={{ color: '#d2ac67' }}>60,128.02</h1>
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
                                                                <td>10</td>
                                                            </tr>
                                                            <tr style={{ borderBottom: '2px solid #d2ac67', width: '100%', lineHeight: '40px' }}>
                                                                <td>Silver</td>
                                                                <td>10</td>
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

            </div >
        )
    }
}


export default WeeklyStats;