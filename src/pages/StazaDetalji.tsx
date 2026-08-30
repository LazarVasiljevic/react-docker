import React from 'react'
import { useParams } from 'react-router-dom';
import {staze } from '../data/staze';
import { CiHeart } from "react-icons/ci";
import '../styles/StazaDetalji.css';
import {useFavorites} from '../context/FavoritesContext';


function StazaDetalji() {
    const { id } = useParams();

    console.log("ID iz URL-a:", id);
    console.log("Sve staze:", staze);

    const trail = staze.find(
        trail => trail.id === Number(id)
    );

    
    console.log("Pronađena staza:", trail);

    const {
        addFavorite,
        removeFavorite,
        hasFavorite
    } = useFavorites();

    if (!trail) {
        return (
            <div>
                <h1>Staza nije pronađena</h1>
            </div>
        );
    }

    const favorite =
        hasFavorite(trail.id);


    const handleFavoriteClick = () => {

        if (favorite) {

            removeFavorite(trail.id);

        } else {

            addFavorite(trail.id);

        }

    };
  return (
    <div className="trail-details">

            <img
                src={trail.image}
                alt={trail.name}
                className="trail-details-image"
            />
            <button
                className={`trail-details-favorite ${
                    favorite
                        ? "trail-details-favorite-active"
                        : ""
                }`}
                onClick={handleFavoriteClick}
                aria-label={
                    favorite
                        ? "Ukloni iz omiljenih"
                        : "Dodaj u omiljene"
                }
            >

                    <CiHeart />

                </button>
            <div className="trail-details-content">
            
                <h1>{trail.name}</h1>

                <p>
                    Lokacija: {trail.location}
                </p>

                <p>
                    Težina: {trail.difficulty}
                </p>

                <p>
                    Dužina: {trail.distance} km
                </p>

                <p>
                    Trajanje: {trail.duration} min
                </p>

                <p>
                    {trail.description}
                </p>

                <button
                    className="favorite-trail-button"
                    onClick={handleFavoriteClick}
                >

                    <CiHeart />

                    {favorite
                        ? "Ukloni iz omiljenih"
                        : "Dodaj u omiljene"
                    }

                </button>
                
            </div>

        </div>
  )
}

export default StazaDetalji