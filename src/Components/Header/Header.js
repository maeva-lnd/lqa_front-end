import React from "react";
import './Header.css';
import logo from '../../Assets/Logo/light-logo.png';
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div>
            <header className="full">
                <div className="container">
                    <img src={logo} alt='Le Quai Antique' id='light-logo' />
                    <Navbar />
                </div>
            </header>
        </div>
    )

};

export default Header;