import React from "react";
import './CreateAccount.css';
import {Link} from "react-router-dom";
import Button from "../../../Components/Button/Button";

const CreateAccount = () => {
    return (
        <div className="authentification-container">

            <h1 className="p40">Créer un compte</h1>

            <input id="firstname" type="text" name="firstname" placeholder="Prénom" required/>
            <input id="lastname" type="text" name="lastname" placeholder="Nom" required/>
            <input id="email" type="email" name="email" placeholder="Email" required/>
            <input id="phone" type="tel" name="phone" placeholder="Téléphone" required/>
            <input id="password" type="password" name="password" placeholder="Mot de passe" required/>
            <input
                id="personnumber"
                type="number"
                name="personnumber"
                placeholder="Nombre de convives par défaut"
                min="1"
                max="7"
                required
            />
            <textarea
                id="allergy"
                name="allergy"
                placeholder="Avez-vous des allergies ? Si oui, veuillez nous les spécifier juste ici"
            />

            <p className="txt-lighter form-msg-privacy">
                En remplissant ce formulaire, je reconnais avoir pris connaissance
                de la <Link to="#" className="txt-lighter link txt-center">politique de confidentialité</Link> du Quai Antique
            </p>

            <div className="ca-btn">
                <Button
                    type={"button"}
                    label={"Créer mon compte"}
                />
            </div>

        </div>
    )

};

export default CreateAccount;