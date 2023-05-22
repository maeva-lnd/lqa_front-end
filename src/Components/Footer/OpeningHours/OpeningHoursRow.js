import React from "react";

const OpeningHoursRow = (props) => {

    let hours;

    // Création d'une fonction permettant de transformer une date en horaire
    const formateHour = (hour) => {
        hour = hour.replace(/[0-9]{4}-[0-9]{2}-[0-9]{2}T/, "")
        hour = hour.replace(/:[0-9]{2}\+[0-9]{2}:[0-9]{2}/, "")
        return hour
    }

    // Condition où le restaurant est ouvert midi et soir
    if (props.openingHours.lunch_opening !== null && props.openingHours.dinner_opening !== null) {
        hours = formateHour(props.openingHours.lunch_opening) + " - " + formateHour(props.openingHours.lunch_closing) + " et " +
            formateHour(props.openingHours.dinner_opening) + " - " + formateHour(props.openingHours.dinner_closing);
    //  Condition où le restaurant est ouvert le soir uniquement
    } else if (props.openingHours.lunch_opening === null && props.openingHours.dinner_opening !== null) {
        hours = formateHour(props.openingHours.dinner_opening) + " - " + formateHour(props.openingHours.dinner_closing);
    // Condition où le restaurant est ouvert le midi uniquement
    } else if (props.openingHours.lunch_opening !== null && props.openingHours.dinner_opening === null) {
        hours = formateHour(props.openingHours.lunch_opening) + " - " + formateHour(props.openingHours.lunch_closing);
    // Condition où le restaurant est fermé midi et soir
    } else {
        hours = 'Fermé';
    }

    return (
        <p>
            {props.day} : {hours}
        </p>
    )

};

export default OpeningHoursRow;