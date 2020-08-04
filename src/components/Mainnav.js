import React from 'react';
import logo from '../logo.svg';

const Mainnav = (props) => {
    
    return (
        <nav className="navbar bg-primary" id="mainNav">
            <div className="app-title">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="navbar-collapse">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item"><a className="nav-link" href="#dashboard">Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link" href="#search">Search</a></li>
                    <li className="nav-item"><a className="nav-link" href="#reports">Reports</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Mainnav;