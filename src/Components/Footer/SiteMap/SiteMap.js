import React from "react";
import {Link} from "react-router-dom";
import Reservation from "../../Reservation/Reservation";

const SiteMap = () => {
    return (
        <div id="sitemap">
            <h4>Plan du site</h4>
            <Link to="/">Accueil</Link>
            <Link to="/lacarte">La carte</Link>
            <Link to="/contact">Contact</Link>
            <Reservation label="Réserver"/>
            <Link to="#">Mentions Légales</Link>
            <Link to="#">Politique de confidentialité</Link>
        </div>
    )

};

export default SiteMap;