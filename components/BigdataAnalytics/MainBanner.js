import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const MainBanner = () => {
    return (
        <div className="bigdata-analytics-banner">
            <div className="container">
                <div className="bigdata-analytics-content">
                    <h1>XXX Leading eIoT Revolution!</h1>
                    <p>From data to actions.  Asset control is generating great value.</p>

                    <Link href="/contact">
                        <a className="btn btn-primary">Get Started</a>
                    </Link>
                </div>
            </div>

            <div className="banner-boxes-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                    <Icon.Server />
                                </div>
                                <h3>Collect data from assets</h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                    <Icon.Code />
                                </div>
                                <h3>Analyze portfolio performance</h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                    <Icon.Users />
                                </div>
                                <h3>Implement Solution</h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MainBanner;  