import React, {Fragment} from "react";

const Step1Service = (props) => {
    return (
        <Fragment>
            <p>{props.service}</p>

            <div className="res-hours">
                {props.hours}
            </div>

        </Fragment>
    )

};

export default Step1Service;