import React from "react";
import './ContactBanner.css';
import Item from "./Item/Item";
import localisationIcon from "../../../Assets/Contact/ContactIcons/localisation-icon.png";
import emailIcon from "../../../Assets/Contact/ContactIcons/email-icon.png";
import mobileIcon from "../../../Assets/Contact/ContactIcons/mobile-icon.png";


const ContactBanner = () => {
    return (
        <div>
            <section className="bg-beige">
                <div className="container infos-banner">

                    <Item
                        title="Adresse"
                        pictureSrc={localisationIcon}
                        pictureAlt="Icône de localisation"
                        txt={"5 rue Côte Berthet" + "<br/>" + "73000 Chambéry" + "<br/>" + "France"}
                    />

                    <Item
                        title="Téléphone"
                        pictureSrc={mobileIcon}
                        pictureAlt="Icône de téléphone"
                        txt="+33 4 57 13 13 13"
                    />

                    <Item
                        title="Email"
                        pictureSrc={emailIcon}
                        pictureAlt="Icône email"
                        txt="contact@lequaiantique.com"
                    />

                </div>
            </section>
        </div>
    )

};

export default ContactBanner;