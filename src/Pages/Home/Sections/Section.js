import React from "react";
import './Section.css';
import Button from "../../../Components/Button/Button";

const Section = (props) => {
    return (
        <section className={props.bgClass ? props.bgClass : ''}>
            <div className={`section container ${props.reverse == 1 ? 'reverse' : ''}`}>

                <img src={props.pictureSrc} alt={props.pictureAlt}/>

                <div className="content">
                    <h2>{props.title}</h2>
                    <p>{props.txt}</p>
                    <Button
                        label={props.btnLabel}
                        src={props.btnSrc}
                        type={props.btnType}
                    />
                </div>
            </div>
        </section>
    )

};

export default Section;