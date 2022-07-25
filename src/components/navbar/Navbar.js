import React, { useState } from "react";
import logo from "../images/logo.png"
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll";


import "./Navbar.css"

const NavBar = ({onScrolling}) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const handleMenuClick = (to) => {
        onScrolling(to)
    };

    return (
        <header className="header">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={logo} alt="logo" />
                </a>
                <div className="hamburger" onClick={handleClick}>
                    {click ? <FaTimes size={30} style={{color: "#ffffff"}} /> : <FaBars size={30} style={{color: "#ffffff"}} />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                       <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav-item" onClick={() => handleMenuClick("#about")}>
                       <Link to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className="nav-item" onClick={() => handleMenuClick("#testimonials")}>
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</Link>
                    </li>
                    <li className="nav-item">
                       <Link to="demo" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Demo</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;