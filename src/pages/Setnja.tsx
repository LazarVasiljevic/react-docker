import React, { useState} from 'react'
import {staze } from '../data/staze';
import StazaCard from '../components/StazaCard';
import FilterDugme from '../components/FilterDugme';

import '../styles/Setnja.css';

function Setnja() {

    const [filteredTrails, setFilteredTrails] = useState(
        staze.filter(trail => trail.typeK === "setnja")
    );

    const filtrirajStaze = (
        mesto: string,
        tezina: string,
        tip: string
    ) => {

        let rezultat = staze.filter(
            trail => trail.typeK === "setnja"
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
    <div className="walking-trails">

        <div className='trails-header'>   
            <h1>Šetnja i planinarenje</h1>
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

export default Setnja