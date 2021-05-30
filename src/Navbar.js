import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__right">
            <Link className="navbar__link" to="/">
                <h1>Burnwal Electricals</h1>
            </Link>
            </div>
            <div className="navbar__left">
            <Link className="navbar__link" to="/about">
                <p>About</p>
                </Link>
            <Link className="navbar__link" to="/contact">
                <p>Contact</p>
                </Link>
            <Link className="navbar__link" to="/categories">
                <p>Categories</p>
                </Link>
            <Link className="navbar__link" to="/basket">
                <p>Basket</p>
                </Link>
            </div>

        </div>
    )
}

export default Navbar
