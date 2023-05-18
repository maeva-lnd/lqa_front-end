import React, {useState, useEffect} from "react";
import axios from "axios";
import './RestaurantMenu.css';
import CardCategory from "./Card/CardCategory";
import { v4 as uuidv4 } from 'uuid';
import Menu from "./Menu/Menu";
import Reservation from "../../Components/Reservation/Reservation";


const RestaurantMenu = () => {

    const [card, setCard] = useState();
    const [menu, setMenu] = useState();

    useEffect(() => {
        const baseURLCard = "http://127.0.0.1:8000/api/card";
        const baseURLMenu = "http://127.0.0.1:8000/api/menu";

        axios.get(baseURLCard).then((response) => {
            setCard(
                response.data.map((item)=>{
                    return <CardCategory
                    key={uuidv4()}
                    name={item.name}
                    dishes={item.dishesCards}
                    />
                })
            )
        });

        axios.get(baseURLMenu).then((response) => {
            setMenu(
                response.data.map((item)=>{
                    return <Menu
                        key={uuidv4()}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        categories={item.categories}
                    />
                })
            )
        });

    }, []);


    return (

        <div className="card-restaurant">
            <div className="slider-card">
                <div className="container txt-center mb40">
                    <h1 className="p40">Cartes et Menus</h1>
                    <p className="txt-center p">
                        Découvrez l'identité culinaire et la créativité de notre chef Arnaud Michant et son équipe à
                        travers des plats réalisés à base de produits raffinés, de saison et de producteurs locaux.
                    </p>
                    <div id="reservation-element">
                        <Reservation label="Réserver une table" />
                    </div>
                </div>
            </div>

            <div className="txt-center bg-beige p20">
                <div className="container">
                    <h2 className="uppercase pb10">A la carte</h2>
                    <p>
                        - Un univers unique de saveurs -
                    </p>
                </div>
            </div>

            {card}
            {menu}
        </div>
    )
};

export default RestaurantMenu;