import React from 'react'

interface GalerijaSlikaProps {
    image: string;
    alt: string;
    onClick: () => void;
}


function GalerijaCard({image,alt, onClick}: GalerijaSlikaProps) {
  return (
    <div className='gallery-image' onClick={onClick}>
        <img src={image} alt={alt} />
    </div>
  )
}

export default GalerijaCard