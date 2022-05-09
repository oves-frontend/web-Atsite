import React from 'react';
import Link from 'next/link';

const BannerPicText = ({content}) => {
    
    const bannerTextPic =content
   // const bannerUrl =bannerTextPic.image
    
    return (
        <>
            <div className="iot-features-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 iot-features-image">
                            <img 
                                src={bannerTextPic.imageURL}
                                
                                alt="image" 
                            />
                        </div>
                        
                        <div className="col-lg-6 iot-features-content">
                            <span className="sub-title">{bannerTextPic.subtitle}</span>
                            <h2>{bannerTextPic.title}</h2>
                            <p>{bannerTextPic.text}</p>
                            {/*<p>{bannerTextPic.richTexts}</p> */}
                            
                            <Link href={bannerTextPic.btnLink}>
                                <a className="btn btn-primary">{bannerTextPic.btnLabel}</a>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BannerPicText;
