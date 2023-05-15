import React from "react";
import './Step2.css';
import editicon from "../../../Assets/ReservationIcons/modification.png";


const Step2 = (props) => {

    const twoDigit = (number) => {
        return (number < 10 ? '0' : '') + number
    }

    // Fonction permettant de changer de Step, en l'occurrence à l'étape 1 ici
    const changeStep = () => {
        props.stepFunc(1)
    }


    // Fonction permettant de formater la date au format DD/MM/YYYY
    const formateDate = (date) => {
        date = date.split("-")
        const dateFormated = new Date();
        dateFormated.setDate(date[2])
        dateFormated.setMonth(date[1])
        dateFormated.setFullYear(date[0])

        return twoDigit(dateFormated.getDate()) + '/' + twoDigit(dateFormated.getMonth()) + '/' + dateFormated.getFullYear();
    }

    return (
        <div>
            <div className="res-overview">
                <p>{props.nbGuest} personne(s) pour le {formateDate(props.date)} à {props.hour}</p>
                <img
                    src={editicon}
                    alt="Icon de modification"
                    className="edit-icon"
                    onClick={changeStep}
                />
            </div>

            <form>
                <div className="res-form">
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Prénom"
                        value={props.firstname}
                        onInput={event => props.firstnameFunc(event.target.value)}
                        required
                    />
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Nom"
                        value={props.lastname}
                        onInput={event => props.lastnameFunc(event.target.value)}
                        required
                    />
                </div>

                <div className="res-form">
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        placeholder="Téléphone"
                        value={props.phone}
                        onInput={event => props.phoneFunc(event.target.value)}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={props.email}
                        onInput={event => props.emailFunc(event.target.value)}
                        required
                    />
                </div>

                <div className="res-form">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Commentaires, allergies, régime spécifique ?"
                        value={props.message}
                        onInput={event => props.messageFunc(event.target.value)}
                    />
                </div>
            </form>
        </div>
    )

};

export default Step2;