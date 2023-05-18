import React, {Fragment} from "react";
import './Reservation.css';
import {useState} from "react";
import cross from '../../Assets/ReservationIcons/cross.png';
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import axios from "axios";
import {useSelector} from 'react-redux';


const Reservation = (props) => {
    // Récupération des infos de session
    const firstnameSelector = useSelector(state => state.firstname);
    const lastnameSelector = useSelector(state => state.lastname);
    const phoneSelector = useSelector(state => state.phone);
    const emailSelector = useSelector(state => state.email);
    const messageSelector = useSelector(state => state.allergy);
    const guestNumberSelector = useSelector(state => state.defaultGuestNumber);

    // Création des states du formulaire
    const [modal, setModal] = useState(false);
    const [step, setStep] = useState(1);
    const [nbGuest, setNbGuest] = useState(guestNumberSelector ? guestNumberSelector : 1);
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [firstname, setFirstname] = useState(firstnameSelector ? firstnameSelector : "");
    const [lastname, setLastname] = useState(lastnameSelector ? lastnameSelector : "");
    const [phone, setPhone] = useState(phoneSelector ? phoneSelector : "");
    const [email, setEmail] = useState(emailSelector ? emailSelector : "");
    const [message, setMessage] = useState(messageSelector ? messageSelector : "");
    const [error, setError] = useState();


    const baseURL = "http://127.0.0.1:8000/api/reservation";

    const toggleModal = () => {

        // Réinitialisation des states de la réservation à l'ouverture et fermeture de la pop-up
        setStep(1);
        setNbGuest(guestNumberSelector ? guestNumberSelector : 1);
        setDate();
        setHour();
        setFirstname(firstnameSelector ? firstnameSelector : "");
        setLastname(lastnameSelector ? lastnameSelector : "");
        setPhone(phoneSelector ? phoneSelector : "");
        setEmail(emailSelector ? emailSelector : "");
        setMessage(messageSelector ? messageSelector : "");
        setError('');

        setModal(!modal)
    };

    const sendReservation = () => {
        if (checkForm()) {
            axios.post(baseURL, {
                "arrival": date + " " + hour,
                "guestNumber": nbGuest,
                "firstname": firstname,
                "lastname": lastname,
                "phone": phone,
                "email": email,
                "allergy": message
            }).then((response) => {
                setStep(3)
            }).catch(function (error) {
                setError("Une erreur technique a été détectée, veuillez réessayer ultérieurement")
            });
        } else {
            setError('Une erreur a été détectée, veuillez vérifier la validité de votre formulaire')
        }
    };

    const checkForm = () => {
        if (
            firstname !== ""
            && firstname !== undefined
            && lastname !== ""
            && lastname !== undefined
            && phone !== ""
            && phone !== undefined
            && /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone)
            && email !== ""
            && email !== undefined
            && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            && nbGuest >= 1
        ) {

            return true

        } else {
            return false
        }
    }

    return (
        <Fragment>

            <button onClick={toggleModal} className="btn-modal">{props.label}</button>

            {modal && (
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content txt-center">
                            <h3>Réserver chez le Quai Antique</h3>
                            <p>
                                Au-delà de 7 couverts, merci de nous contacter directement par téléphone au 04 57 13 13 13.
                                Votre table sera réservée jusqu'à 20 min après l'heure de votre réservation. Passer ce délai,
                                nous ne pouvons plus vous garantir la disponibilité de votre table.
                            </p>
                            <img
                                src={cross}
                                alt="Fermeture fenêtre pop-up"
                                onClick={toggleModal}
                                className="close-modal"
                            />

                            {step === 1 &&
                                <Step1
                                    nbGuest={nbGuest}
                                    date={date}
                                    nbGuestFunc={setNbGuest}
                                    dateFunc={setDate}
                                    hourFunc={setHour}
                                    stepFunc={setStep}
                                />
                            }
                            {step === 2 &&
                                <Step2
                                    nbGuest={nbGuest}
                                    date={date}
                                    hour={hour}
                                    firstname={firstname}
                                    lastname={lastname}
                                    phone={phone}
                                    message={message}
                                    email={email}
                                    firstnameFunc={setFirstname}
                                    lastnameFunc={setLastname}
                                    phoneFunc={setPhone}
                                    emailFunc={setEmail}
                                    messageFunc={setMessage}
                                    stepFunc={setStep}
                                />
                            }
                            {step === 2 && error &&
                                <div className="txt-center error-msg">
                                    {error}
                                </div>
                            }
                            {step === 2 &&
                                <div className="txt-center">
                                    <button className="btn btn-form" onClick={sendReservation}>Réserver</button>
                                </div>
                            }
                            {step === 3 &&
                                <Step3/>
                            }
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
};

export default Reservation;