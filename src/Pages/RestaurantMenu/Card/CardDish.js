import React from "react";

const CardDish = (props) => {

    return (
        <div className="card-item">
            <h4>{props.name}</h4>
            <p className="p20 txt-lighter">{props.description}</p>
            <p className="txt-lighter">{props.price} €</p>
        </div>
    )

};

export default CardDish;