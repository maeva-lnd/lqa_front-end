import React, {useState} from "react";
import './Login.css';
import {Link} from "react-router-dom";
import Button from "../../../Components/Button/Button";
import {useDispatch} from "react-redux";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();

    const nav = useNavigate();

    const sendConnexion = () => {
        const getUserURL = "http://127.0.0.1:8000/api/user"
        const getTokenURL = "http://127.0.0.1:8000/api/login_check"

        // Récupération du token
        axios.post(
            getTokenURL,
            {"username": email, "password": password},
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        ).then((response) => {
            const token =  response.data.token
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "bearer " + response.data.token,
                }
            }

            // Récupération des infos de l'utilisateur
            axios.get(
                getUserURL,
                config
            ).then((response) => {

                // Création des variables de sessions
                window.sessionStorage.setItem("token", token);
                window.sessionStorage.setItem("firstname", response.data.firstname);
                window.sessionStorage.setItem("lastname", response.data.lastname);
                window.sessionStorage.setItem("email", response.data.email);
                window.sessionStorage.setItem("phone", response.data.phone);
                window.sessionStorage.setItem("defaultGuestNumber", response.data.defaultGuestNumber);
                window.sessionStorage.setItem("allergy", response.data.allergy);

                dispatch ({
                    type: "SET_USER",
                    payload: {
                        token: response.data.token,
                        firstname: response.data.firstname,
                        lastname: response.data.lastname,
                        email: response.data.email,
                        phone: response.data.phone,
                        defaultGuestNumber: response.data.defaultGuestNumber,
                        allergy: response.data.allergy,
                    }
                })

                // Après connexion, redirection vers la page d'accueil
                nav("/");
            });
        });
    }


    return (
        <div className="authentification-container">
            <h1 className="p40">Connexion</h1>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onInput={event => {setEmail(event.target.value)}}
                required
            />
            <input
                id="password"
                type="password"
                name="password"
                placeholder="Mot de passe"
                onInput={event => {setPassword(event.target.value)}}
                required
            />
            <Link to="/motdepasseperdu" className="txt-lighter link">Mot de passe oublié ?</Link>
            <div className="btn-group">
                <button className="btn" type="submit" onClick={sendConnexion}>Se connecter</button>
                <Button
                    type="link"
                    label="Créer un compte"
                    color='btn-white'
                    src="/inscription"
                />
            </div>
        </div>
    )
};

export default Login;