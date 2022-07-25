import React from "react";
import "./Home.css";

const Home = () => {
    return (
       <div className="hero" id="home">
        <div className="content">
            <p>Call us</p>
            <a href="tel:+374-77-77-77-77"><p>+374-77-77-77-77</p></a>
            <p>Because Money</p>
            <p>Doesn't come with instructions</p>
            <button className="button">Free Consultations</button>
        </div>
       </div>
    );
};

export default Home;
