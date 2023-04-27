import React from "react";
import {Link} from "react-router-dom";

const SiteMap = () => {
    return (
        <div id="sitemap">
            <h4>Plan du site</h4>
            <Link to="/">Accueil</Link>
            <Link to="/lerestaurant">Le restaurant</Link>
            <Link to="/lacarte">La carte</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/reservation">Réserver</Link>
            <Link to="#">Mentions Légales</Link>
            <Link to="#">Politique de confidentialité</Link>
        </div>
    )

};

export default SiteMap;