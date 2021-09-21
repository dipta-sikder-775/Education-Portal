import React from 'react';
import logo from '../../../Media/img/Shared-Images/education-portal-logo.jpg';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="nav-area">
        <input type="checkbox" id="box" />
        <label for="box" className="btn-area"><i className="fa fa-align-left"></i></label>
        <label>
            <img src={logo} alt="" className="logo" />
        </label>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Events</a></li>
        </ul>
    </nav>
    );
};

export default Navbar;