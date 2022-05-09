import React from 'react';
import Link from 'next/link';

const _BannerPicText = ({content}) => {
    const bannerTextPic =content
    return (
        <div className="about-area pt-0 ptb-80">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-about-img">
                            <img 
                                src={bannerTextPic.image.data.attributes.url}
                                className="animate__animated animate__fadeInUp animate__delay-0.6s" 
                                alt="image" 
                            />                        
                        </div>
                    </div>
                    {bannerTextPic.title}
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-about-content">
                            <span className="sub-title">{bannerTextPic.subtitle}</span>
                            <h2>{bannerTextPic.title}</h2>
                            <div className="bar"></div>
                            <p>{bannerTextPic.text}</p>
                            <Link href={bannerTextPic.btnLink}>
                                <a className="btn btn-secondary">{bannerTextPic.btnLabel}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </div>
    );
}

export default _BannerPicText;