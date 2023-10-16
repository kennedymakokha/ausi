import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import Prices, { PriceSmall } from './prices';
import './menustyle.css'

class AdminNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };

        this.handleScroll = this.handleScroll.bind(this);

        this.mobileMenuElement = React.createRef();
    }

    activeMobileMenu = () => {
        this.mobileMenuElement.current.toggleMobileMenu();
    }

    handleScroll() {
        if (this.mount) {
            this.setState({ scroll: window.scrollY });
        }
    }

    componentDidMount() {

        this.mount = true;
        const el = document.querySelector('nav');
        // setInterval(() => {
        //     this.getApiData();
        // }, 1000);
        this.setState({ scroll: window.scrollY });
        this.setState({ top: el.offsetTop, height: el.offsetHeight });
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {

        // this.getApiData();
        this.state.scroll > this.state.top ?
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

    componentWillUnmount() {
        this.mount = false;
    }
    getApiData = async () => {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", "goldapi-1pgf6rlmylsbqq-io");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({ data: JSON.parse(result) })
                return result

            })
            .catch(error => console.log('error', error));

        // update the state
        // setStatus(response.success)
        // setPrices(response.rates);
    };

    render() {

        const { data } = this.state;

        return (
            <div>
                {/*====================  header area ====================*/}
                <div className={`header-area header-sticky header-sticky--default ${this.state.scroll > this.state.top ? "is-sticky" : ""}`}>
                    <div className="header-area__desktop header-area__desktop--default">

                        <div className="header-navigation-area default-bg" style={{ backgroundColor: "#000", }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/* header navigation */}
                                        <div className="header-navigation header-navigation--header-default position-relative">
                                            {/* <div className="logo">
                                                <Link to={`${process.env.PUBLIC_URL}/home-one`}  style={{display:'flex',justifyContent:'center',justifyItems:'center',flex:'col'}} >
                                                    <img src="assets/assets/aussie-logo.png" className="img-fluid" alt="Logo" />
                                                </Link>
                                            </div> */}
                                            <div className="header-navigation__nav position-static" style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>

                                                <nav>
                                                    <ul>
                                                        <li className="">

                                                            <Link to={`${process.env.PUBLIC_URL}/admin`} style={{ textTransform: 'uppercase' }}> Home </Link>

                                                        </li>
                                                        <li className="">
                                                            <Link to={`${process.env.PUBLIC_URL}/admin/subscribers`} style={{ textTransform: 'uppercase' }}> Subscribers </Link>

                                                        </li>
                                                        <li className="">
                                                            <Link to={`${process.env.PUBLIC_URL}/admin/users`} style={{ textTransform: 'uppercase' }}> Users </Link>

                                                        </li>
                                                        <li className="">
                                                            <Link to={`${process.env.PUBLIC_URL}/admin/user-feedbacks`} style={{ textTransform: 'uppercase' }}> feed Backs </Link>

                                                        </li>
                                                        {/* <li><Link to={`${process.env.PUBLIC_URL}/about-us`}>ABOUT</Link></li> */}
                                                        {/* <li className=""> */}
                                                        {/* <Link to={`${process.env.PUBLIC_URL}/assay`}>ASSAY</Link> */}
                                                        {/* <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/services`}>Refining</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>Service Details Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}>Service Details Right Sidebar</Link></li>
                                                </ul> */}
                                                        {/* </li> */}
                                                        {/* <li className=""> */}
                                                        {/* <Link to={`${process.env.PUBLIC_URL}/refinery`} >REFINERY</Link> */}
                                                        {/* <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/projects`} >Project Page</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/project-details`}>Project Details</Link></li>
                                                </ul> */}
                                                        {/* </li> */}
                                                        {/* <li className="">
                                                <Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>BLOG</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>Blog Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-right-sidebar`}>Blog Right Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}>Blog Details Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}>Blog Details Right Sidebar</Link></li>
                                                </ul>
                                            </li> */}
                                                        {/* <li><Link to={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</Link> </li> */}
                                                    </ul>
                                                </nav>

                                                <div style={{ color: "white", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', fontWeight: 'bold', color: '#d2ac67' }}>
                                                    {/* <img src="assets/assets/aussie-logo.png" style={{ height: '10px' }} className="img-fluid" alt="Logo" /> */}
                                                    <div class="dropdown">
                                                        <button> {this.props?.user?.name}</button>
                                                        <div class="dropdown-options">
                                                            {/* <a href="#">Dashboard</a>
                                                            <a href="#">Setting</a> */}
                                                            <div onClick={() => { localStorage.clear(); window.location.reload(false); }}>Logout</div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}

                {/* Mobile Menu */}
                <MobileMenu ref={this.mobileMenuElement} />
                <div className='smallScreenRates' style={{}}>
                    <PriceSmall small={true} data1={data} />
                </div>

            </div>
        )
    }
}


export default AdminNavBar;