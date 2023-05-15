import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import './Step1.css';
import {v4 as uuidv4} from "uuid";
import Step1Service from "./Step1Service";

const Step1 = (props) => {

    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
    const today = new Date();

    // Création d'une fonction permettant de transformer une date au format YYYY-MM-DD
    const formatDate = (date) => {
        let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate();
        let year = date.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return year + '-' + month + '-' + day;
    }

    // Création d'une fonction permettant de transformer une date en horaire avec des Regex
    const formateHour = (hour) => {
        hour = hour.replace(/[0-9]{4}-[0-9]{2}-[0-9]{2}T/, "")
        hour = hour.replace(/:[0-9]{2}\+[0-9]{2}:[0-9]{2}/, "")
        return hour
    }

    // Fonction permettant de changer de Step, en l'occurrence le Step 2 ici
    const changeStep = (event) => {
        props.hourFunc(event.target.id)
        props.stepFunc(2)
    }

    useEffect(() => {
        const baseURL = "http://127.0.0.1:8000/api/reservation/gethours/" + props.date+ "/" + props.nbGuest

        // Récupération des heures disponibles
        if (props.date !== undefined && props.nbGuest !== undefined) {
            axios.get(baseURL).then((response) => {
                if(response.data.lunch !== undefined) {
                    setLunch(
                        response.data.lunch.map((item)=>{

                            return (
                                <div
                                    key={uuidv4()}
                                    className="hour-element"
                                    id={formateHour(item)}
                                    onClick={event => changeStep(event)}
                                >
                                    {formateHour(item)}
                                </div>
                            )

                        })
                    )
                } else {
                    setLunch([])
                }

                if(response.data.dinner !== undefined) {
                    setDinner(
                        response.data.dinner.map((item)=>{
                            return (
                                <div
                                    key={uuidv4()}
                                    className="hour-element"
                                    id={formateHour(item)}
                                    onClick={event => changeStep(event)}
                                >
                                    {formateHour(item)}
                                </div>
                            )
                        })
                    )
                } else {
                    setDinner([])
                }
            });
        }

    }, [props.date, props.nbGuest]);

    return (
        <Fragment>

            <div className="res1">
                <select defaultValue={props.nbGuest} name="nb-guest" onInput={event => props.nbGuestFunc(event.target.value)}>
                    <option value="1">1 couvert</option>
                    <option value="2">2 couverts</option>
                    <option value="3">3 couverts</option>
                    <option value="4">4 couverts</option>
                    <option value="5">5 couverts</option>
                    <option value="6">6 couverts</option>
                    <option value="7">7 couverts</option>
                </select>
                <input
                    onInput={event => props.dateFunc(event.target.value)}
                    type="date"
                    min={formatDate(today)}
                />
            </div>

            <div className="res2">
                {lunch.length !== 0 &&
                    <Step1Service
                        service="Midi"
                        hours={lunch}
                    />
                }
                {dinner.length !== 0 &&
                    <Step1Service
                        service="Soir"
                        hours={dinner}
                    />
                }
            </div>

        </Fragment>
    )
};

export default Step1;