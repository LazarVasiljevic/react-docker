import React from 'react'
import type {VremeData}  from '../models/Vreme';
import '../styles/VremeCard.css';
import sunny from "../../public/images/s.png";
import partlyCloudy from "../../public/images/pc.png";
import cloudy from "../../public/images/cl.png";
import fog from "../../public/images/f.png";
import rain from "../../public/images/r.png";
import snow from "../../public/images/snow.png";
import thunderstorm from "../../public/images/th.png";


interface VremeCardProps {
  naziv: string;
  vreme: VremeData;
}

function getDayName(date: string): string {
  const days = [ "ned","pon","uto","sre","čet","pet","sub"];
  const day = new Date(date).getDay();
  return days[day];
}

function getWeatherIcon(code: number): string {
  if (code === 0) {
    return sunny;
  }

  if (code === 1 || code === 2) {
    return partlyCloudy;
  }

  if (code === 3) {
    return cloudy;
  }

  if (code === 45 || code === 48) {
    return fog;
  }

  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)){
    return rain;
  }

  if (code >= 71 && code <= 77) {
        return snow;
  }

  if (code >= 95 && code <= 99) {
        return thunderstorm;
  }

  return cloudy;
}

function VremeCard({ naziv, vreme }: VremeCardProps) {
  return (
    <section className="weather-location">

      <h2>{naziv}</h2>

      <div className="weather-card">

        {vreme.time.map((date, index) => (
          <div className="weather-day" key={date}>

            <p className="weather-day-name">
              {getDayName(date)}
            </p>

            <div className="weather-icon">
              <img
                  src={getWeatherIcon(vreme.weather_code[index])}
                  alt="Vremenska prognoza"
              />
            </div>

            <p className="temperature-max">
              {Math.round(vreme.temperature_2m_max[index])}°C
            </p>

            <p className="temperature-min">
              {Math.round(vreme.temperature_2m_min[index])}°C
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default VremeCard