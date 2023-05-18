import React from "react";
import './Footer.css';
import logo from "../../Assets/Logo/dark-logo.png"
import OpeningHours from "./OpeningHours/OpeningHours";
import SiteMap from "./SiteMap/SiteMap";
import ContactInformations from "./ContactInformations/ContactInformations";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="full">
            <div className="container">
                <div id="logo">
                    <Link to="/">
                        <img src={logo} alt='Le Quai Antique' id='dark-logo'/>
                    </Link>
                </div>
                <div id="footer-infos">
                    <OpeningHours />
                    <SiteMap />
                    <ContactInformations />
                </div>
                <div id="copyright">
                    <p>Le Quai Antique | Copyright © 2023 </p>
                </div>
            </div>
        </footer>
    )

};

export default Footer;