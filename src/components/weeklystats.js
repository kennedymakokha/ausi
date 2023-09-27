import React, { Component } from 'react';

class WeeklyStats extends Component {
    render() {
        let data = [
            { img: '1.jpg', atrr: [], date: 'AUGUST 4, 2019', title: 'Gold Prices', postExcerpt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex.…', link: 'blog-details-left-sidebar' },
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
                <div className="col-lg-4" key={i}>
                    <div className="blog-post-slider__single-slide blog-post-slider__single-slide--grid-view">
                        <h2 className='section-title' style={{ textAlign: 'center' }}>{val.title}</h2>
                        <div className="blog-post-slider__content">
                            <ul style={{ listStyle: 'none', fontSize: '28px', fontWeight: 'bold', lineHeight: '45px' }}>
                                {val?.atrr?.map((at, i) => (
                                    <li>
                                        {at?.title}:{at?.value}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {/*====================  blog grid area ====================*/}
                < div className={`blog-grid-area section-space--inner--120 ${this.props.background}`}>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="blog-grid-wrapper">
                                    <div className="row">
                                        {DataList}
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