import React, { useState} from 'react'
import {staze } from '../data/staze';
import StazaCard from '../components/StazaCard';
import FilterDugme from '../components/FilterDugme';
import Paginacija from '../components/Paginacija';
import '../styles/Setnja.css';

function Setnja() {

    const [currentPage, setCurrentPage] =
        useState(1);


    const trailsPerPage = 9;

    
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

    const totalPages = Math.ceil(
        filteredTrails.length / trailsPerPage
    );
     const startIndex =
        (currentPage - 1) * trailsPerPage;


    const currentTrails =
        filteredTrails.slice(
            startIndex,
            startIndex + trailsPerPage
        );

     const handlePageChange = (page: number) => {

        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  return (
    <div className="walking-trails">

        <div className='trails-header'>   
            <h1>Šetnja i planinarenje</h1>
            <FilterDugme onFilterChange={filtrirajStaze}/>
        </div>
            

            <div className="trails-grid">

                {currentTrails.map(trail => (
                    <StazaCard
                        key={trail.id}
                        staza={trail}
                    />
                ))}

            </div>

            <Paginacija
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
  )
}

export default Setnja