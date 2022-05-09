import React, { useState } from "react";
import Link from '@/utils/ActiveLink';
import * as Icon from 'react-feather';  
const NavbarFixedTop = ({content}) => {
    
    const header = content
     
    const navItems = header.navItems.navItems
    const logo = header.headerLogo.url
    
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom navbar-color-white navbar-style-four">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src={logo} width="150px" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                
                            {navItems.map((nav, index)=> ( 
                                 
                                <li key={index} className="nav-item">
                                    <Link href={nav.link} activeClassName="active">
                                        <a className="nav-link">
                                            {nav.label}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                               {/*}
                                <li className="nav-item">
                                {navbar.map((nav)=>( 
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            {nav.Blog}
                                        </a>
                                    </Link>
                                    ))}
                                </li>
                                <li className="nav-item">
                                {navbar.map((nav)=>( 
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            {nav.Shop}
                                        </a>
                                    </Link>
                                       ))}
                                </li>
                                <li className="nav-item">
                                {navbar.map((nav)=>( 
                                    <Link href="/contact" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">{nav.About}</a>
                                    </Link>
                                 ) )}
                                </li>
                                */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}


export default NavbarFixedTop;