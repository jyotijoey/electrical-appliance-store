import React from 'react';
import "./About.css"
import Navbar from './Navbar';

function About() {
    return (
        <div className="about">
        <Navbar />
        <div className="about__container">
            <h1>About Burnwal Electricals</h1>
            <p>Burnwal Electricals was started by Burnwal brothers Govind Lal Burnwal and Dilip Kumar Burnwal. They initially started their business by selling bulbs and then expanded to be the largest retailer and wholesaler of Jharkhand.</p>
        </div>
        </div>
    )
}

export default About
