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

  if (code >= 200 && code < 300) {
    return thunderstorm;
  }

  if ((code >= 300 && code < 400) ||(code >= 500 && code < 600)) {
    return rain;
  }

  if (code >= 600 && code < 700) {
    return snow;
  }

  if (code >= 700 && code < 800) {
    return fog;
  }

  if (code === 800) {
    return sunny;
  }

  if (code === 801 || code === 802) {
    return partlyCloudy;
  }

  if (code === 803 || code === 804) {
    return cloudy;
  }

  return cloudy;
}

function VremeCard({ naziv, vreme }: VremeCardProps) {
  return (
    <section className="weather-location">

      <h2>{naziv}</h2>

      <div className="weather-card">

        {vreme.time.map((date, index) => {

          const code = vreme.weather_code[index];

          const maxTemperature =vreme.temperature_2m_max[index];

          const minTemperature =vreme.temperature_2m_min[index];

          return (
            <div className="weather-day" key={date}>

              <p className="weather-day-name">
                {getDayName(date)}
              </p>

              <div className="weather-icon">

                <img
                  src={getWeatherIcon(code)}
                  alt="Vremenska prognoza"
                />

              </div>

              <p className="temperature-max">
                {Math.round(maxTemperature)}°C
              </p>

              <p className="temperature-min">
                {Math.round(minTemperature)}°C
              </p>

            </div>
          );

        })}

      </div>

    </section>
  )
}

export default VremeCard