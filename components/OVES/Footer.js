import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import ReactMarkdown from "react-markdown";

const Footer = ({content}) => {
    const footer = content
 
    const currentYear = new Date().getFullYear();
    const quickLinks = footer.quickLinks.navItems

    

    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                {/* 
                                */}
                                <Link href="/">
                                    <a>
                                         <img src={footer.footerLogo.url} width="40px"alt="logo" /> 
                                    </a>
                                </Link> 
                            </div>
                            <p> {footer.summary}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                        <ReactMarkdown children={footer.company}/>  
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Quick Links</h3>

                             <ul className="list">
                             {quickLinks.map((link, index)=>(
                                <li key={index}>
                                    <Link href={link.link}>
                                        <a> {link.label}</a>
                                       
                                    </Link>
                                    
                                </li>
                                 ))}
                                {/*
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/term-condition">
                                        <a>Terms & Condition</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team">
                                        <a>Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                
                            */}
                            </ul> 
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Contacts</h3>
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    {footer.address}
                                </li>
                                <li>
                                    <Icon.Mail />
                                    {footer.email}
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    {footer.phone}
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li> 
                                    <a href={footer.social.facebook} className="facebook" target="_blank">
                                        <Icon.Facebook />
                                    </a> 
                                </li>
                                <li>
                                    <a href={footer.social.twitter} className="twitter" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href={footer.social.instagram} className="instagram" target="_blank">
                                        <Icon.Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href={footer.social.linkedin} className="linkedin" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>{footer.copyrights}</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 