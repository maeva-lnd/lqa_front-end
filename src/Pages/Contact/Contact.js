import React from "react";
import './Contact.css';
import Button from "../../Components/Button/Button";
import ContactForm from "./ContactForm/ContactForm";
import ContactBanner from "./ContactBanner/ContactBanner";
import Reservation from "../../Components/Reservation/Reservation";

const Contact = () => {
    return (
        <div>
            <div className="slider-contact txt-center">
                <h1 className="p40">Nous contacter</h1>
                <p className="p">L'équipe du Quai Antique vous accueille dans son ambiance conviviale.</p>
                <div id="reservation-element">
                    <Reservation label="Réserver une table" />
                </div>
            </div>
            <h2 className="txt-center p40">Demandes Spéciales</h2>
            <p className="txt-center">
                Une demande/envie particulière ? Besoin d'un devis personnalisé ? <br/><br/>
                Intéressé par une privatisation pour un évènement ? <br/><br/>
                Contactez-nous par téléphone ou par mail. <br/><br/>
                Vous pouvez également nous envoyer un message via le formulaire ci-dessous :
            </p>
            <ContactForm />
            <ContactBanner />
        </div>
    )

};

export default Contact;