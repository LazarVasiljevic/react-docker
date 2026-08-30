import React, {useState} from 'react'
import belj from '../../public/images/beljanica vodopadi.jpg';
import bg from '../../public/images/beograd.jpg';
import bk from '../../public/images/besna-kobila.jpg';
import div from '../../public/images/divcibare.jpg';
import fg from '../../public/images/fruska-gora.jpg';
import goc from '../../public/images/goc.jpg';
import jas from '../../public/images/jastebac.jpg';
import kop from '../../public/images/kopaonik.jpg';
import sp from '../../public/images/stara-planina.jpg';
import tara from '../../public/images/tara.jpg';
import val from '../../public/images/valjevo.jpg';
import GalerijaCard from '../components/GalerijaCard';

import '../styles/Galerija.css';

interface GalerijaItem {
    image: string;
    alt: string;
}
function Galerija() {
  const slike: GalerijaItem[] = [
    {
        image: belj,
        alt: "Beljanca vodopadi",
    },
    {
        image: bg,
        alt: "Beograd",
    },
    {
        image: bk,
        alt: "Besna kobila",
    },
    {
        image: div,
        alt: "Divčibare",
    },
    {
        image: fg,
        alt: "Fruška gora",
    },
    {
        image: goc,
        alt: "Goč",
    },
    {
        image: jas,
        alt: "Jastebac",
    },
    {
        image: kop,
        alt: "Kopaonik",
    },
    {
        image: sp,
        alt: "Stara planina",
    },
    {
        image: tara,
        alt: "Tara",
    },
    {
        image: val,
        alt: "Valjevo",
    }
    
];

 const [selectedImage, setSelectedImage] = useState<number | null>(null);


    const nextImage = () => {

        if (selectedImage === null) {
            return;
        }

        setSelectedImage(
            (selectedImage + 1) % slike.length
        );
    };


    const previousImage = () => {

        if (selectedImage === null) {
            return;
        }

        setSelectedImage(
            (selectedImage - 1 + slike.length) % slike.length
        );
    };


    const closeLightbox = () => {
        setSelectedImage(null);
    };

  return (
    <>
      <div className="gallery">

        {slike.map((slika, index) => (

          <GalerijaCard
             key={index}
              image={slika.image}
              alt={slika.alt}
              onClick={() => setSelectedImage(index)}
          />

        ))}

      </div>

      {selectedImage !== null && (

        <div
          className="view"
          onClick={closeLightbox}
        >

          <button
            className="view-close"
            onClick={closeLightbox}
          >
            x
          </button>

          <button
            className="view-arrow view-arrow-left"
            onClick={(e) => {
            e.stopPropagation();
            previousImage();
          }}
          >
            ‹
          </button>

            <img
              className="view-image"
              src={slike[selectedImage].image}
              alt={slike[selectedImage].alt}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="view-arrow view-arrow-right"
                onClick={(e) => {
                e.stopPropagation();
                nextImage();
                }}
            >
              ›
            </button>

        </div>

      )}
    </>

  )
}

export default Galerija