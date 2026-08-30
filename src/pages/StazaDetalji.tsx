import React from 'react'
import { useParams } from 'react-router-dom';
import {staze } from '../data/staze';
import { CiHeart } from "react-icons/ci";
import '../styles/StazaDetalji.css';
import {useFavorites} from '../context/FavoritesContext';
import { RxLapTimer } from "react-icons/rx";
import { GiPathDistance } from "react-icons/gi";
import { RiTreasureMapLine } from "react-icons/ri";
import { MdHeight } from "react-icons/md";
import { GiHiking } from "react-icons/gi";
import { GiTrail } from "react-icons/gi";



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
            <div className='trail-header'>
                
                <div className='trail-header-name'>
                    <h1>{trail.name}</h1>

                    <h2> {trail.location}</h2> 
                </div>

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
            </div>
        <div className='trail-content'>
            <div className='trail-content-left'>
                <img
                    src={trail.image}
                    alt={trail.name}
                    className="trail-details-image"
                />
                <p>
                    {trail.description}
                </p>
            </div>

            <div className="trail-content-right">
                <div className='trail-content-item'>
                    <GiHiking />
                    <span>Težina: {trail.difficulty}</span>
                </div>

                <div className='trail-content-item'>
                    <RiTreasureMapLine/>
                    <span>Dužina: {trail.distance} km</span>
                </div>

                <div className='trail-content-item'>
                    <RxLapTimer/>
                    <span>Trajanje: {trail.duration}</span>
                </div>
                <div className='trail-content-item'>
                    <GiTrail/>
                    <span>Tip staze: {trail.tipStaze}</span>
                </div>
            </div>    

                
        </div>
                

            

        </div>
  )
}

export default StazaDetalji