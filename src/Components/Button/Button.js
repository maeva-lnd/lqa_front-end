import React from "react";
import './Button.css';
import {Link} from "react-router-dom";

const Button = (props) => {

    if(props.type === "button") {
        return (
            <div>
                <button
                    className={`btn ${props.color ? props.color : ''} ${props.border ? props.border : ''}`}
                >{props.label}</button>
            </div>
        )
    } else {
        return (
            <div>
                <Link
                    className={`btn ${props.color ? props.color : ''} ${props.border ? props.border : ''}`} to={props.src}
                >{props.label}</Link>
            </div>
        )
    }

};

export default Button;