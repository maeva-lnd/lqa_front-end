import React from "react";
import './ForgotPassword.css';
import {Link} from "react-router-dom";
import Button from "../../../Components/Button/Button";

const ForgotPassword = () => {
    return (
        <div className="authentification-container forgot-password">
            <h1 className="p40">Réinitialiser son mot de passe</h1>
            <p>
                Nous vous ferons parvenir un e-mail pour réinitialiser votre mot de passe
            </p>
            <input id="email" type="email" name="email" placeholder="Email" required/>
            <Button
                type={"button"}
                label={"Envoyer"}
            />
            <Link to="/connexion" className="txt-lighter link txt-center">Annuler</Link>
        </div>
    )

};

export default ForgotPassword;