import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
import Reservation from "../../Reservation/Reservation";
import {useSelector} from 'react-redux';
import {useState} from "react";
import {useEffect} from "react";
import burgerBar from "../../../Assets/Toggle/burger-bar.jpg";
import closeIcon from "../../../Assets/Toggle/close.png";

const Navbar = () => {

    const firstname = useSelector(state => state.firstname);

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavbar = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <div>

            {(toggleMenu || largeur > 1199) && (
                <nav className="navbar">
                    <NavLink onClick={toggleNavbar} to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Accueil
                    </NavLink>
                    <NavLink onClick={toggleNavbar} to="/lacarte" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        La carte
                    </NavLink>
                    <NavLink onClick={toggleNavbar} to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        Contact
                    </NavLink>
                    <Reservation label="Réserver"/>
                    {!firstname && <NavLink onClick={toggleNavbar} to="/connexion" >Se connecter</NavLink>}
                    {firstname && <NavLink to="http://localhost:8000/admin" target="_blank">Admin</NavLink>}
                    {firstname && <NavLink onClick={toggleNavbar} to="/deconnexion" >Se déconnecter</NavLink>}
                </nav>
            )}


            <div className="toggle">
                {!toggleMenu && (
                    <img onClick={toggleNavbar} src={burgerBar} alt="Icône de menu"/>
                )}
                {toggleMenu && (
                    <img onClick={toggleNavbar} className="close-icon" src={closeIcon} alt="Icône de fermeture"/>
                )}
            </div>
        </div>
    )

};

export default Navbar;