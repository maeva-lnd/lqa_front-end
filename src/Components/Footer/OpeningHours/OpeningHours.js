import React, {useState, useEffect} from "react";
import axios from "axios";
import OpeningHoursRow from "./OpeningHoursRow";
import { v4 as uuidv4 } from 'uuid';


const OpeningHours = () => {

    const [openingHours, setOpeningHours] = useState();

    useEffect(() => {
        const baseURL = process.env.REACT_APP_API_BASE_URL + "api/openinghours";

         axios.get(baseURL).then((response) => {
             setOpeningHours(
                 response.data.map((item)=>{
                      return <OpeningHoursRow
                          key={uuidv4()}
                          day={item.name}
                          openingHours={item.openingHours}
                      />
                })
             )
        });

    }, []);

    return (
        <div>
            <h4>Nos horaires d'ouverture</h4>
            {openingHours}
        </div>
    )

};

export default OpeningHours;