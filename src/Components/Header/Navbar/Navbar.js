import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";

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
                <NavLink to="/reservation" >Réserver</NavLink>
                <NavLink to="/login" >Se connecter</NavLink>
            </nav>
        </div>
    )

};

export default Navbar;