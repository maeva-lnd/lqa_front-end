import React from "react";
import './RestaurantMenu.css';
import Button from "../../Components/Button/Button";

const RestaurantMenu = () => {
    return (

        <div className="card-restaurant">
            <div className="slider-card">
                <div className="container txt-center mb40">
                    <h1 className="p40">Cartes et Menus</h1>
                    <p className="txt-center">
                        Découvrez l'identité culinaire et la créativité de notre chef Arnaud Michant et son équipe à <br/>
                        travers des plats réalisés à base de produits raffinés, de saison et de producteurs locaux.
                    </p>
                    <Button
                        label={"Réserver une table"}
                    />
                </div>
            </div>

            <div className="txt-center bg-beige p20">
                <div className="container">
                    <h2 className="uppercase pb10">A la carte</h2>
                    <p>
                        - Un univers unique de saveurs -
                    </p>
                </div>
            </div>

            <div className="container p40">
                <h3 className="txt-center category">Nos entrées</h3>
                <div className="separator" />
                <div className="card-items txt-center">
                    <div className="card-item">
                        <h4>Aligot à la tomme de Savoie</h4>
                        <p className="p20 txt-lighter">Aubergines, lard grillé et crème de morilles</p>
                        <p className="txt-lighter">11€</p>
                    </div>
                    <div className="card-item">
                        <h4>Camembert truffé</h4>
                        <p className="p20 txt-lighter">Rôti au four</p>
                        <p className="txt-lighter">12€</p>
                    </div>
                    <div className="card-item">
                        <h4>L'oeuf parfait</h4>
                        <p className="p20 txt-lighter">Fricassé de pleurotes et shiitaké, lard paysan</p>
                        <p className="txt-lighter">11€</p>
                    </div>
                    <div className="card-item">
                        <h4>La petite salade Savoyarde</h4>
                        <p className="p20 txt-lighter">Fouillis de salades, tomates, lardons, croûtons, œuf mollet, beaufort</p>
                        <p className="txt-lighter">11€</p>
                    </div>
                    <div className="card-item">
                        <h4>Petit carpaccio de boeuf</h4>
                        <p className="p20 txt-lighter">Aux copeaux de beaufort et fouillis de salades</p>
                        <p className="txt-lighter">11€</p>
                    </div>
                    <div className="card-item">
                        <h4>Foie gras mi-cuit maison</h4>
                        <p className="p20 txt-lighter">Chutney myrtilles, pain aux noix</p>
                        <p className="txt-lighter">14€</p>
                    </div>
                    <div className="card-item">
                        <h4>Tartare de truite de Savoie</h4>
                        <p className="p20 txt-lighter">Echalotte, ciboulette</p>
                        <p className="txt-lighter">13€</p>
                    </div>
                </div>
            </div>

            <div className="container p40">
                <h3 className="txt-center category">Nos plats</h3>
                <div className="separator" />
                <div className="card-items txt-center">
                    <div className="card-item">
                        <h4>Entrecôte grillée</h4>
                        <p className="p20 txt-lighter">
                            Jus au romarin et écrasée de pommes de terre à l'huile de truffe
                        </p>
                        <p className="txt-lighter">24€</p>
                    </div>
                    <div className="card-item">
                        <h4>Filet d'agneau cuit en basse température</h4>
                        <p className="p20 txt-lighter">
                            Servi avec polenta crémeuse au beaufort et fagots d'haricots verts
                        </p>
                        <p className="txt-lighter">23€</p>
                    </div>
                    <div className="card-item">
                        <h4>Magret de canard entier</h4>
                        <p className="p20 txt-lighter">
                            Servi avec un dôme de polenta, une mousseline de carottes, et une sauce au miel de Savoie
                        </p>
                        <p className="txt-lighter">24€</p>
                    </div>
                    <div className="card-item">
                        <h4>Escalope de poulet</h4>
                        <p className="p20 txt-lighter">
                            Sauce reblochon accompagnée de champignons, servi avec frites et salade
                        </p>
                        <p className="txt-lighter">20€</p>
                    </div>
                    <div className="card-item">
                        <h4>Carpaccio de boeuf XXL</h4>
                        <p className="p20 txt-lighter">
                            Aux copaux de beaufort, fouillis de salades et pommes campagnardes
                        </p>
                        <p className="txt-lighter">18€</p>
                    </div>
                    <div className="card-item">
                        <h4>La grande salade Savoyarde</h4>
                        <p className="p20 txt-lighter">
                            Fouillis de salades, tomates, lardons, croûtons, œuf mollet, beaufort
                        </p>
                        <p className="txt-lighter">18€</p>
                    </div>
                    <div className="card-item">
                        <h4>Pavé de saumon</h4>
                        <p className="p20 txt-lighter">
                            Servi avec des légumes de saison, riz basmati, sauce au beurre blanc
                        </p>
                        <p className="txt-lighter">23€</p>
                    </div>
                    <div className="card-item">
                        <h4>Dos de cabillaud</h4>
                        <p className="p20 txt-lighter">
                            Servi avec une julienne de légumes, écrasée de pommes de terre et sauce normande
                        </p>
                        <p className="txt-lighter">23€</p>
                    </div>
                    <div className="card-item">
                        <h4>Burger Savoyard</h4>
                        <p className="p20 txt-lighter">
                            Steak haché, fromage de Savoie,lard grillé, compotée d’oignons, sauce maison servi avec
                            frites et salade
                        </p>
                        <p className="txt-lighter">19€</p>
                    </div>
                </div>
            </div>

            <div className="container p40">
                <h3 className="txt-center category">Nos desserts</h3>
                <div className="separator" />
                <div className="card-items txt-center">
                    <div className="card-item">
                        <h4>Assiette de fromages régionaux</h4>
                        <p className="p20 txt-lighter">
                            Beaufort, Reblochon, Tomme de Savoie, Délice de Chartreuse</p>
                        <p className="txt-lighter">9€</p>
                    </div>
                    <div className="card-item">
                        <h4>Tarte aux myrtilles</h4>
                        <p className="p20 txt-lighter">
                            Pâte sablée aux amandes, frangipane, myrtilles sauvages
                        </p>
                        <p className="txt-lighter">8€</p>
                    </div>
                    <div className="card-item">
                        <h4>Tarte tatin aux pommes de Savoie</h4>
                        <p className="p20 txt-lighter">
                            Caramélisées à la vanille Bourbon, servie avec une double crème fouettée
                        </p>
                        <p className="txt-lighter">8€</p>
                    </div>
                    <div className="card-item">
                        <h4>Crème brûlée</h4>
                        <p className="p20 txt-lighter">
                            Vanille Bourbon caramélisée au sucre cassonade
                        </p>
                        <p className="txt-lighter">11€</p>
                    </div>
                    <div className="card-item">
                        <h4>Coeur coulant au chocolat</h4>
                        <p className="p20 txt-lighter">
                            Boule vanille et chantilly
                        </p>
                        <p className="txt-lighter">9€</p>
                    </div>
                    <div className="card-item">
                        <h4>Panna cotta spéculos</h4>
                        <p className="p20 txt-lighter">
                            Coulis au choix : fruits rouges ou fruits de la passion
                        </p>
                        <p className="txt-lighter">7€</p>
                    </div>
                    <div className="card-item">
                        <h4>Café ou thé gourmand</h4>
                        <p className="p20 txt-lighter">
                            Petite déclinaison de notre carte des desserts
                        </p>
                        <p className="txt-lighter">10€</p>
                    </div>
                </div>
            </div>

            <div className="txt-center bg-beige p20 mt40">
                <div className="container">
                    <h2 className="uppercase pb10">Menu gourmand</h2>
                    <p>
                        35€
                    </p>
                </div>
            </div>

            <div className="container txt-center card-items p40">
                <div className="card-item">
                    <h3>Entrées au choix</h3>
                </div>
                <div className="card-item">
                    <h3>Plats au choix</h3>
                </div>
                <div className="card-item">
                    <h3>Desserts au choix</h3>
                </div>
                <div className="card-item">
                    <h4>L'oeuf parfait</h4>
                    <p className="p20 txt-lighter">
                        Fricassé de pleurotes et shiitaké, lard paysan
                    </p>
                </div>
                <div className="card-item">
                    <h4>Escalope de poulet</h4>
                    <p className="p20 txt-lighter">
                        Sauce reblochon accompagnée de champignons servi avec frites et salade
                    </p>
                </div>
                <div className="card-item">
                    <h4>Panna cotta spéculos</h4>
                    <p className="p20 txt-lighter">
                        Coulis au choix : fruits rouges ou fruits de la passion
                    </p>
                </div>
                <div className="card-item">
                    <h4>La petite salade Savoyarde</h4>
                    <p className="p20 txt-lighter">
                        Fouillis de salades, tomates, lardons, croûtons, œuf mollet, beaufort
                    </p>
                </div>
                <div className="card-item">
                    <h4>Pavé de saumon</h4>
                    <p className="p20 txt-lighter">
                        Servi avec des légumes de saison, riz basmati, sauce au beurre blanc
                    </p>
                </div>
                <div className="card-item">
                    <h4>Crème brûlée</h4>
                    <p className="p20 txt-lighter">
                        Vanille Bourbon caramélisée au sucre cassonade
                    </p>
                </div>
                <div className="card-item">
                    <h4>Tartare de truite de Savoie</h4>
                    <p className="p20 txt-lighter">
                        Echalotte, ciboulette
                    </p>
                </div>
                <div className="card-item">
                    <h4>Burger Savoyard</h4>
                    <p className="p20 txt-lighter">
                        Steak haché, fromage de Savoie,lard grillé, compotée d’oignons, sauce maison servi avec
                        frites et salade
                    </p>
                </div>
                <div className="card-item">
                    <h4>Coeur coulant au chocolat</h4>
                    <p className="p20 txt-lighter">
                        Boule vanille et chantilly
                    </p>
                </div>
            </div>

            <div className="txt-center bg-beige p20 mt40">
                <div className="container">
                    <h2 className="uppercase pb10">Menu enfant</h2>
                    <p className="pb10">
                        - Jusqu'à 12 ans -
                    </p>
                    <p>15€</p>
                </div>
            </div>

            <div className="container txt-center card-items p40">
                <div className="card-item2">
                    <h3>Plats au choix</h3>
                </div>
                <div className="card-item2">
                    <h3>Desserts au choix</h3>
                </div>
                <div className="card-item2">
                    <h4>
                        Viande du jour avec frites ou légumes de saison
                    </h4>
                </div>
                <div className="card-item2">
                    <h4>
                        Crémeux chocolat chantilly
                    </h4>
                </div>
                <div className="card-item2">
                    <h4>
                        Poisson du jour avec frites ou légumes de saison
                    </h4>
                </div>
                <div className="card-item2">
                    <h4>
                        2 boules de glace au choix
                    </h4>
                </div>
            </div>

        </div>
    )
};

export default RestaurantMenu;