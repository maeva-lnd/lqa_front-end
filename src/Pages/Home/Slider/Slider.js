import React from "react";
import './Slider.css';
import Button from "../../../Components/Button/Button";
import Reservation from "../../../Components/Reservation/Reservation";


const Slider = () => {
    return (
        <section id="slider">
            <h1>Le Quai Antique</h1>
            <p className="p">Cuisine gastronomique française de Savoie</p>
            <div id="reservation-element"><Reservation label="Réserver une table" /></div>
        </section>
    )

};

export default Slider;