import React from "react";

const Item = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <img src={props.pictureSrc} alt={props.pictureAlt}/>
            {props.txt.split("<br/>").map((item, i) => { return <p key={i}>{item}</p>})}
        </div>
    )

};

export default Item;