import React from "react";
import error404 from '../../Assets/Page404/404.jpg';
import './Page404.css';

const Page404 = () => {
    return (
        <div>
            <img className="error-404" src={error404} alt="Erreur 404"/>
        </div>
    )

};

export default Page404;