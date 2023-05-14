import React from "react";
import './Step2.css';
import editicon from "../../../Assets/ReservationIcons/modification.png";


const Step2 = (props) => {

    const changeFirstname = (event) => {
        props.firstnameFunc(event.target.value)
    }

    const changeLastname = (event) => {
        props.lastnameFunc(event.target.value)
    }

    const changePhone = (event) => {
        props.phoneFunc(event.target.value)
    }

    const changeEmail = (event) => {
        props.emailFunc(event.target.value)
    }

    const changeMessage = (event) => {
        props.messageFunc(event.target.value)
    }

    const twoDigit = (number) => {
        return (number < 10 ? '0' : '') + number
    }

    const changeStep = () => {
        props.stepFunc(1)
    }



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
                        onInput={event => changeFirstname(event)}
                        required
                    />
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Nom"
                        value={props.lastname}
                        onInput={event => changeLastname(event)}
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
                        onInput={event => changePhone(event)}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={props.email}
                        onInput={event => changeEmail(event)}
                        required
                    />
                </div>

                <div className="res-form">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Commentaires, allergies, régime spécifique ?"
                        value={props.message}
                        onInput={event => changeMessage(event)}
                    />
                </div>
            </form>
        </div>
    )

};

export default Step2;