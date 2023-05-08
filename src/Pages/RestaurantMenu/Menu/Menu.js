import React, {Fragment} from "react";
import {v4 as uuidv4} from "uuid";
import MenuCategory from "./MenuCategory";

const Menu = (props) => {

    const menuCategories = props.categories.map((item)=>{
        return <MenuCategory
            key={uuidv4()}
            name={item.name}
            dishes={item.dishes}
        />
    })

    return (
        <Fragment>
            <div className="txt-center bg-beige p20 mt40">
                <div className="container">
                    <h2 className="uppercase pb10">{props.name}</h2>
                    <p className="pb10">{props.description}</p>
                    <p>{props.price} €</p>
                </div>
            </div>
            <div className="container txt-center menu p40">
                {menuCategories}
            </div>
        </Fragment>
    )
};

export default Menu;