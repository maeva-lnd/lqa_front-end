import React from "react";
import {v4 as uuidv4} from "uuid";
import MenuDish from "./MenuDish";

const MenuCategory = (props) => {

    const menuDishes = props.dishes.map((item)=>{
        return <MenuDish
            key={uuidv4()}
            name={item.name}
            description={item.description}
        />
    })

    return (
        <div className="menu-category">
            <h3>{props.name}</h3>
            {menuDishes}
        </div>
    )
};

export default MenuCategory;