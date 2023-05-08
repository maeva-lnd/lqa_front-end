import React from "react";

const MenuDish = (props) => {

    return (
        <div className="menu-dish">
            <h4>{props.name}</h4>
            {props.description && <p className="p20 txt-lighter">{props.description}</p>}
        </div>
    )
};

export default MenuDish;