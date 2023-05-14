import React from "react";
import Slider from "./Slider/Slider";
import Section from "./Sections/Section";
import picture from "../../Assets/Home/lqa-restaurant.jpg";
import picture2 from "../../Assets/Home/cuisine-section.jpg";
import picture3 from "../../Assets/Home/privatisation-section.jpg";
import Gallery from "../../Components/Gallery/Gallery";
import Reservation from "../../Components/Reservation/Reservation";


const Home = () => {
    return (
        <div>
            <Slider />

            <Section
                pictureSrc={picture}
                pictureAlt={"Restaurant Le Quai Antique"}
                title={"Bienvenue chez Le Quai Antique"}
                txt={"Dans le centre de Chambéry, entrez dans l'univers singulier du restaurant Le Quai Antique et " +
                    "découvrez une ambiance chaleureuse et une cuisine bistronomique pleine de ressources. " +
                    "Dans un décor moderne et lumineux, vous pourrez découvrir l'identité et la créativité de notre " +
                    "chef Arnaud Michant et son équipe à travers une carte réalisée à base de produits raffinés, " +
                    "de saison et de producteurs locaux."}
                btnLabel={"En savoir plus"}
            />

            <Section
                pictureSrc={picture2}
                pictureAlt="Une cuisine authentique"
                title={"Une cuisine authentique"}
                txt={"Amoureux des bons produits et de la cuisine authentique, nous choisissons des ingrédients " +
                    "de qualité auprès des meilleurs producteurs que nous valorisons au sein de notre restaurant. " +
                    "Nos plats sont élaborés à partir d’ingrédients rigoureusement sélectionnés, frais et cuisinés " +
                    "par notre équipe au sein du restaurant pour vous proposer une carte originale 100% maison, " +
                    "et respectueuse des saisons"}
                btnLabel={"Découvrez notre carte"}
                btnSrc={'/lacarte'}
                btnType={'link'}
                bgClass={"bg-beige"}
                reverse
            />

            <Gallery />

            <div id="reservation-element" className="txt-center pb50">
                <Reservation label="Réserver une table" />
            </div>

            <Section
                pictureSrc={picture3}
                pictureAlt="Privatisation du restaurant"
                title={"Privatisation"}
                txt={"Le Quai Antique, c'est une histoire de partage, et c'est pour cela que nous aimons " +
                    "organiser pour vous des moments agréables lors de vos événements professionnels ou personnels. \n" +
                    "Anniversaires, réunions, célébrations, contactez-nous dès maintenant pour vos repas de groupe !"}
                btnLabel={"Contactez-nous"}
                btnSrc={'/contact'}
                btnType={'link'}
                bgClass={"bg-beige"}
            />
        </div>
    )

};

export default Home;