import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Trail } from '../models/Staza';
import { RxLapTimer } from "react-icons/rx";
import { RiTreasureMapLine } from "react-icons/ri";
import { MdHeight } from "react-icons/md";
import '../styles/StazaCard.css';

interface StazaCardProps{
    staza: Trail;
}

function StazaCard({ staza }: StazaCardProps) {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/staza/${staza.id}`);
    }

  return (
    <div className="trail-card" onClick={handleClick}>
        <div className="trail-card-top">
            <div className="difficulty">{staza.difficulty}</div>
            <img
                src={staza.image}
                alt={staza.name}
            />
            <div className="trail-info">
                <h3>{staza.name}</h3>
                <p>{staza.location}</p>
            </div>
            
        </div>

        <div className="trail-card-bottom">
            <div className="info-item">
                <RxLapTimer />
                <span className="duration"> {staza.duration}</span>
            </div>
            <div className="info-item">
                <RiTreasureMapLine />
                <span className="distance"> {staza.distance}km</span>
            </div>
            <div className="info-item">
                <MdHeight />
                <span className="elevation">{staza.elevation}mnv</span>
            </div>
               
        </div>

    </div>
        
  )
}

export default StazaCard