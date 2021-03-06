import React from 'react';
import Link from 'next/link';

const BannerTextPic = ({content}) => {
    
    const bannerTextPic =content
   // const bannerUrl =bannerTextPic.image
   // console.log('btp image',bannerTextPic.image);
    return (
        <>
            <div className="iot-features-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 iot-features-content">
                            <span className="sub-title">{bannerTextPic.subtitle}</span>
                            <h3>{bannerTextPic.title}</h3>
                            <p>{bannerTextPic.text}</p>
                            {/*<p>{bannerTextPic.richTexts}</p> */}
                            
                            <Link href={bannerTextPic.btnLink}>
                                <a className="btn btn-primary">{bannerTextPic.btnLabel}</a>
                            </Link>
                        </div>

                        <div className="col-lg-6 iot-features-image">
                            <img 
                                src={bannerTextPic.ImageURL}
                                className="animate__animated animate__fadeInUp animate__delay-0.6s" 
                                alt="image" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*
            <div className="iot-features-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 iot-features-image">
                            <img 
                                src='/images/iot-features-image/iot-feature-image2.png'
                                className="animate__animated animate__fadeInUp animate__delay-0.6s" 
                                alt="image"
                            />
                        </div>
                        
                        <div className="col-lg-6 iot-features-content">
                            <h3>How Can Your City Use IoT Technology?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>

                            <Link href="#">
                                <a className="btn btn-primary">Not here!</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </>
    );
}

export default BannerTextPic;
