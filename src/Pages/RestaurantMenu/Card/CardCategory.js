import React from "react";
import CardDish from "./CardDish";
import { v4 as uuidv4 } from 'uuid';

const CardCategory = (props) => {

    const dishesCard = props.dishes.map((item)=>{
        return <CardDish
            key={uuidv4()}
            name={item.name}
            description={item.description}
            price={item.price}
        />
    })

    return (
        <div className="container p40">
            <h3 className="txt-center category">{props.name}</h3>
            <div className="separator" />
            <div className="card-items txt-center">
                {dishesCard}
            </div>
        </div>
    )

};

export default CardCategory;