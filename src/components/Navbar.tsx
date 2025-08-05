import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Solo Travelers</h1>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/destinations">Destinations</Link>
                </li>
                <li>
                    <Link to="/budget">Budget</Link>
                </li>
                <li>
                    <Link to="/flights">Flights</Link>
                </li>
                <li>
                    <Link to="/airbnb">Airbnb</Link>
                </li>
                <li>
                    <Link to="/chat">Chat</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;