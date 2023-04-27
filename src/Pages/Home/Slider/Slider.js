import React from "react";
import './Slider.css';
import Button from "../../../Components/Button/Button";

const Slider = () => {
    return (
        <section id="slider">
            <h1>Le Quai Antique</h1>
            <p>Cuisine gastronomique française de Savoie</p>
            <Button
                label={"Réserver une table"}
            />
        </section>
    )

};

export default Slider;