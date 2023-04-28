import React from "react";
import './ContactForm.css';
import Button from "../../../Components/Button/Button";

const ContactForm = () => {
    return (
        <div>
            <form className="container-contact p40">

                <div className="form-group">
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Prénom"
                        required
                    />
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Nom"
                        required
                    />
                </div>

                <div className="form-group">

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Téléphone"
                        required
                    />

                </div>

                <div className="form-group">
                    <input
                        type="text"
                        id="object"
                        name="object"
                        placeholder="Objet"
                        required
                    />
                </div>
                <div className="form-group">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Ecrivez votre message ici"
                    required
                />
                </div>
                <div className="txt-center">
                    <Button
                        label="Envoyer votre demande"
                        type="button"
                        classname="btn-form"
                    />
                </div>

            </form>
        </div>
    )

};

export default ContactForm;