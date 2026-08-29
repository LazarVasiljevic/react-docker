import React from 'react'
import { useParams } from 'react-router-dom';
import {staze } from '../data/staze';

import '../styles/StazaDetalji.css';

function StazaDetalji() {
    const { id } = useParams();

    console.log("ID iz URL-a:", id);
    console.log("Sve staze:", staze);

    const trail = staze.find(
        trail => trail.id === Number(id)
    );

    console.log("Pronađena staza:", trail);
    
    if (!trail) {
        return (
            <div>
                <h1>Staza nije pronađena</h1>
            </div>
        );
    }


  return (
    <div className="trail-details">

            <img
                src={trail.image}
                alt={trail.name}
                className="trail-details-image"
            />

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

            </div>

        </div>
  )
}

export default StazaDetalji