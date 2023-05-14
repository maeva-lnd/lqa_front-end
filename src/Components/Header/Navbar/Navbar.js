import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
import Reservation from "../../Reservation/Reservation";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    Accueil
                </NavLink>
                <NavLink to="/lacarte" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    La carte
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    Contact
                </NavLink>
                <Reservation label="Réserver"/>
                <NavLink to="/connexion" >Se connecter</NavLink>
            </nav>
        </div>
    )

};

export default Navbar;