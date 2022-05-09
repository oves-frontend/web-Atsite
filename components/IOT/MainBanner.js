import React from 'react';
import Link from 'next/link';

const MainBanner = (props) => {
    return (
        <div className="iot-main-banner">
            <div className="container">
                <div className="iot-banner-content">
                    <span>{props.content.title}</span>
                    <h2>{props.content.subTitle}</h2>
                    <p>{props.content.text}</p>
                    
                    <Link href={props.content.btnLink}>
                        <a className="btn btn-primary">{props.content.btnLabel}</a>
                    </Link>
                </div>

                <div className="iot-banner-image">
                    <img 
                        src='/images/iot-banner-image/iot-main-img1.png'
                        className="animate__animated animate__fadeInUp animate__delay-0.8s" 
                        alt="image"
                    />
                
                    <img 
                        src='/images/iot-banner-image/iot-shape1.png'
                        className="animate__animated animate__zoomIn" 
                        alt="image"
                    />
                </div>

                <div className="animate-border">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;
