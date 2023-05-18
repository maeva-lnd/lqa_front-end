import React from "react";
import './ContactForm.css';
import {useState} from "react";
import axios from "axios";

const ContactForm = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [object, setObject] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [contactMessage, setContactMessage] = useState();

    const sendMessage = () => {
        if (checkForm()) {
            const baseURL = "http://127.0.0.1:8000/api/contact";

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
                "object": object,
                "message": message,
            }

            axios.post(baseURL, datas, config)
                .then((response) => {
                    setContactMessage('Votre message a bien été pris en compte, vous recevrez une réponse par email dans les plus brefs délais !')
                    setError(undefined)
                }).catch((error) => {
                    setContactMessage(undefined)
                    setError('Une erreur technique a été détectée, veuillez réessayer ultérieurement')
                });
        } else {
            setContactMessage(undefined)
            setError("Une erreur a été détectée, veuillez vérifier la validité de votre formulaire")
        }
    }

    const checkForm = () => {
        if (
            firstname !== ""
            && firstname !== undefined
            && lastname !== ""
            && lastname !== undefined
            && email !== ""
            && email !== undefined
            && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            && phone !== ""
            && phone !== undefined
            && /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone)
            && object !== ""
            && object !== undefined
            && message !== ""
            && message !== undefined
        ) {

            return true

        } else {
            return false
        }
    }

    return (
        <div>
            <div className="container-contact p40">
                {error && (<p className="error-msg">{error}</p>)}
                {contactMessage && (<p className="success-msg">{contactMessage}</p>)}
                <div className="form-group">
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Prénom"
                        onInput={event => {setFirstname(event.target.value)}}
                        required
                    />
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Nom"
                        onInput={event => {setLastname(event.target.value)}}
                        required
                    />
                </div>

                <div className="form-group">

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onInput={event => {setEmail(event.target.value)}}
                        required
                    />

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Téléphone"
                        onInput={event => {setPhone(event.target.value)}}
                        required
                    />

                </div>

                <div className="form-group">
                    <input
                        type="text"
                        id="object"
                        name="object"
                        placeholder="Objet"
                        onInput={event => {setObject(event.target.value)}}
                        required
                    />
                </div>
                <div className="form-group">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Ecrivez votre message ici"
                    onInput={event => {setMessage(event.target.value)}}
                    required
                />
                </div>
                <div className="btn-group">
                    <button className="btn btn-form" onClick={sendMessage}>Envoyer votre demande</button>
                </div>

            </div>
        </div>
    )
};

export default ContactForm;