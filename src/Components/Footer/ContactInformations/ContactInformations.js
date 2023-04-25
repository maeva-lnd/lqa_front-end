import React from "react";
import {Link} from "react-router-dom";
import facebook from "../../../Assets/SocialsIcons/facebook.png";
import instagram from "../../../Assets/SocialsIcons/instagram.png";
import twitter from "../../../Assets/SocialsIcons/twitter.png";

const ContactInformations = () => {
    return (
        <div>
            <div id="contact-informations">
                <h4>Contact</h4>
                <p>
                    Le Quai Antique <br/>
                    5 rue Côte Berthet <br/>
                    73000 Chambéry <br/>
                    France <br/> <br/>
                    0457131313 <br/>
                    contact@lequaiantique.com
                </p>
                <div className="socials-links">
                    <Link to="#">
                        <img src={facebook} alt="Facebook"/>
                    </Link>
                    <Link to="#">
                        <img src={instagram} alt="Instagram"/>
                    </Link>
                    <Link to="#">
                        <img src={twitter} alt="Twitter"/>
                    </Link>
                </div>
            </div>
        </div>
    )

};

export default ContactInformations;