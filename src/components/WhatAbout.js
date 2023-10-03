import React, { Component } from 'react';

class Whatabout extends Component {
    render() {

        let data = [
            { featureIcon: "feature-1.png", featureTitle: "How We Work", featureDescription: "We have developed a robust and cost-effective solutions for precious metals quality recovery and refining." },
            { featureIcon: "feature-2.png", featureTitle: "Expertise", featureDescription: <ul><li>Assets</li><li>Pro Experts</li><li>Networks</li><li>Capacity</li></ul> },
            { featureIcon: "feature-3.png", featureTitle: "Assay", featureDescription: <ul><li>Gold & Silver</li><li>Precious Stones</li><li>Accurate Analysis</li><li>Accessible Results</li></ul> }
        ];

        let Datalist = data.map((val, i) => {
            return (
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}
                // style={{ paddingTop: '50px', paddingBottom: '50px' }}
                >
                    <div className="feature">
                        <div className="icon">
                            <img src={`assets/img/icons/${val.featureIcon}`} className="img-fluid" alt="" />
                        </div>
                        <div className="content">
                            <h3>{val.featureTitle}</h3>
                            <p>{val.featureDescription}</p>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {/*Feature section start*/}
                <div className={`feature-section  ${this.props.background}`}
                    style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="feature-item-wrapper">
                                <div className="row">
                                    {Datalist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Feature section end*/}
            </div>
        )
    }
}

export default Whatabout;