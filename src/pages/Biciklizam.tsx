import React, { useState } from 'react'
import {staze } from '../data/staze';
import StazaCard from '../components/StazaCard';
import FilterDugme from '../components/FilterDugme';
import '../styles/Biciklizam.css';

function Biciklizam() {

    const cyclingTrails = staze.filter(
        trail => trail.typeK === "biciklizam"
    );
    
    const [filteredTrails, setFilteredTrails] = useState(
            staze.filter(trail => trail.typeK === "biciklizam")
        );
    const filtrirajStaze = (
            mesto: string,
            tezina: string,
            tip: string
        ) => {

            let rezultat = staze.filter(
                trail => trail.typeK === "biciklizam"
            );


            if (mesto !== "sve") {
                rezultat = rezultat.filter(
                    trail => trail.location === mesto
                );
            }


            if (tezina !== "sve") {
                rezultat = rezultat.filter(
                    trail => trail.difficulty === tezina
                );
            }


            if (tip !== "sve") {
                rezultat = rezultat.filter(
                    trail => trail.tipStaze === tip
                );
            }


            setFilteredTrails(rezultat);
        };        
  return (
    <div className="cycling-trails">

        <div className='trails-header'>   
            <h1>Biciklizam</h1>
            <FilterDugme onFilterChange={filtrirajStaze}/>
        </div>

        <div className="trails-grid">

            {filteredTrails.map(trail => (
                <StazaCard
                    key={trail.id}
                    staza={trail}
                />
            ))}

        </div>

    </div>
  )
}

export default Biciklizam