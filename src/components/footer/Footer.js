import React from "react";
import {Link} from "react-scroll";
import "./Footer.css";



const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <ul>
                    <li className="nav-item">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500}>Testimonials</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="demo" spy={true} smooth={true} offset={-150} duration={500}>Demo</Link>
                    </li>
                </ul>
                <div className="bottom">
                    <span className="line"></span>
                    <p>2022 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
