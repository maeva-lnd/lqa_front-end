import React, {useState, useEffect} from "react";
import axios from "axios";
import OpeningHoursRow from "./OpeningHoursRow";


const OpeningHours = () => {

    const [openingHours, setOpeningHours] = useState();

    React.useEffect(() => {
        const baseURL = "http://127.0.0.1:8000/api/openinghours"

         axios.get(baseURL).then((response) => {
             setOpeningHours(
                 response.data.map((item)=>{
                      return <OpeningHoursRow
                          day={item.name}
                          openingHours={item.openingHours}
                      />
                })
             )
        });

    }, []);

    console.log(openingHours)

    return (
        <div>
            <h4>Nos horaires d'ouverture</h4>
            {openingHours}
        </div>
    )

};

export default OpeningHours;