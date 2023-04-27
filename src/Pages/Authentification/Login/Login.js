import React from "react";
import './Login.css';
import {Link} from "react-router-dom";
import Button from "../../../Components/Button/Button";

const Login = () => {
    return (
        <div className="authentification-container">
            <h1 className="p40">Connexion</h1>
            <input id="email" type="email" name="email" placeholder="Email" required/>
            <input id="password" type="password" name="password" placeholder="Mot de passe" required/>
            <Link to="/motdepasseperdu" className="txt-lighter link">Mot de passe oublié ?</Link>
            <div className="btn-group">
                <Button
                    type={"button"}
                    label={"Se connecter"}
                />
                <Button
                    type={"link"}
                    label={"Créer un compte"}
                    color={'btn-white'}
                    src={"/inscription"}
                />
            </div>
        </div>
    )

};

export default Login;