import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
import Reservation from "../../Reservation/Reservation";
import {useSelector} from 'react-redux';

const Navbar = () => {

    const firstname = useSelector(state => state.firstname);


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
                {!firstname && <NavLink to="/connexion" >Se connecter</NavLink>}
                {firstname && <NavLink to="/deconnexion" >Se déconnecter</NavLink>}
            </nav>
        </div>
    )

};

export default Navbar;