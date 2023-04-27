import React from "react";
import './Gallery.css';
import picture from '../../Assets/Gallery/filet_agneau.jpg';
import picture2 from '../../Assets/Gallery/escalope_poulet.jpg';
import picture3 from '../../Assets/Gallery/pave_saumon.jpg';
import picture4 from '../../Assets/Gallery/burger_savoyard.jpg';

const Gallery = () => {
    return (
        <div className="gallery">

            <div className="content-img">
                <img src={picture} alt='Agneau cuit en basse température'/>
                <p>Filet d'agneau</p>
            </div>

            <div className="content-img">
                <img src={picture2} alt='Escalope de poulet'/>
                <p>Escalope de poulet</p>
            </div>

            <div className="content-img">
                <img src={picture3} alt='Pavé de saumon'/>
                <p>Pavé de saumon</p>
            </div>

            <div className="content-img">
                <img src={picture4} alt='Burger savoyard'/>
                <p>Burger savoyard</p>
            </div>


        </div>
    )

};

export default Gallery;