import React from "react";
import './Header.css';
import logo from '../../Assets/Logo/light-logo.png';
import Navbar from "./Navbar/Navbar";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="full">
                <div className="container p20">
                    <Link to="/">
                        <img src={logo} alt='Le Quai Antique' id='light-logo'/>
                    </Link>
                    <Navbar />
                </div>
            </header>
        </div>
    )
};

export default Header;