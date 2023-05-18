import React, {useState, useEffect} from "react";
import './CreateAccount.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


const CreateAccount = () => {

    // Création des states du formulaire de création de compte
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [nbGuest, setNbGuest] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();

    const nav = useNavigate();

    const createAccount = () => {

        if (checkForm()) {
            const baseURL = "http://127.0.0.1:8000/api/user";

            const config = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }

            const datas = {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "phone": phone,
                "password": password,
                "defaultGuestNumber": typeof nbGuest === "string" ? parseInt(nbGuest) : nbGuest,
                "allergy": message,
            }

            axios.post(baseURL, datas, config)
                .then((response) => {
                    nav("/connexion");
                }   ).catch((error) => {
                setError('Une erreur est apparue !')
            });
        } else {
            setError("Une erreur a été détectée, veuillez vérifier la validité de votre formulaire")
        }


    }

    const checkForm = () => {
        if (
            firstname !== ""
            && lastname !== ""
            && email !== ""
            && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            && phone !== ""
            && /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone)
            && password !== ""
            && nbGuest >= 1
        ) {

            return true

        } else {
            return false
        }
    }

    return (
        <div className="authentification-container">

            <h1 className="p40">Créer un compte</h1>
            {error && (<p className="error-msg">{error}</p>)}
            <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Prénom"
                onInput={event => {setFirstname(event.target.value)}}
                required
            />
            <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Nom"
                onInput={event => {setLastname(event.target.value)}}
                required
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onInput={event => {setEmail(event.target.value)}}
                required
            />
            <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Téléphone"
                onInput={event => {setPhone(event.target.value)}}
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
            <input
                id="personnumber"
                type="number"
                name="personnumber"
                placeholder="Nombre de convives par défaut"
                min="1"
                max="7"
                onInput={event => {setNbGuest(event.target.value)}}
                required
            />
            <textarea
                id="allergy"
                name="allergy"
                placeholder="Avez-vous des allergies ? Si oui, veuillez nous les spécifier juste ici"
                onInput={event => {setMessage(event.target.value)}}
            />

            <p className="txt-lighter form-msg-privacy">
                En remplissant ce formulaire, je reconnais avoir pris connaissance
                de la <Link to="#" className="txt-lighter link txt-center">politique de confidentialité</Link> du Quai Antique
            </p>

            <div className="btn-group">
                <button className="btn" onClick={createAccount}>Créer mon compte</button>
            </div>


        </div>
    )

};

export default CreateAccount;