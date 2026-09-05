import React from 'react'
import { useEffect, useState } from "react";
import VremeCard from "../components/VremeCard";
import type { LokacijaVreme } from "../models/Vreme";
import FilterDugme from "../components/FilterDugme";
import '../styles/Vreme.css';

const lokacije: LokacijaVreme[] = [
  {
    name: "Beljanica",
    latitude: 44.0906,
    longitude: 21.5767
  },
  {
    name: "Jastrebac",
    latitude: 43.4200,
    longitude: 21.4333
  },
  {
    name: "Stara planina",
    latitude: 43.3700,
    longitude: 22.5800
  },
  {
    name: "Divčibare",
    latitude: 44.10694,
    longitude: 19.99167
  },
  {
    name: "Tara",
    latitude: 43.92,
    longitude: 19.47
  },
  {
    name: "Kopaonik",
    latitude: 43.2682,
    longitude: 20.8202
  },
  {
    name: "Fruška gora",
    latitude: 45.15631,
    longitude: 19.70965
  },
  {
    name: "Besna kobila",
    latitude: 42.5294,
    longitude: 22.2306
  },
  {
    name: "Beograd",
    latitude: 44.7872,
    longitude: 20.4573
  },
  {
    name: "Valjevo",
    latitude: 44.275,
    longitude: 19.898
  },
  {
    name: "Goč",
    latitude: 43.5364,
    longitude: 20.8456
  }
  
];


function Vreme() {
  console.log("VREME KOMPONENTA SE RENDERUJE");

  const [vremeLokacije, setVremeLokacije] = useState<LokacijaVreme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [izabranoMesto, setIzabranoMesto] = useState("sve");  

  useEffect(() => {

    const fetchVreme = async () => {

      try {

        setLoading(true);
        setError("");

        const results = await Promise.all(
        lokacije.map(async (location) => {

          const url = new URL(
            "https://api.open-meteo.com/v1/forecast"
          );

          url.searchParams.append(
            "latitude",
            location.latitude.toString()
          );

          url.searchParams.append(
            "longitude",
            location.longitude.toString()
          );

          url.searchParams.append(
            "daily",
            "weather_code,temperature_2m_max,temperature_2m_min"
          );

          url.searchParams.append(
            "timezone",
            "auto"
          );

          url.searchParams.append(
            "forecast_days",
            "7"
          );

          console.log("Šaljem zahtev:", url.toString());

          const response = await fetch(url.toString());

          console.log(
            "Status:",
            response.status,
            location.name
          );

          if (!response.ok) {
            const errorText = await response.text();

            console.error(
              "Open-Meteo greška:",
              errorText
            );

            throw new Error(
              `Open-Meteo greška: ${response.status}`
            );
          }

          const data = await response.json();

          console.log(
            `Podaci za ${location.name}:`,
            data
          );

          return {
            ...location,
            vreme: {
              time: data.daily.time,
              weather_code: data.daily.weather_code,
              temperature_2m_max:
                data.daily.temperature_2m_max,
              temperature_2m_min:
                data.daily.temperature_2m_min
            }
          };
        })
      );

      setVremeLokacije(results);

    } catch (error) {

      console.error(
        "GREŠKA PRILIKOM UČITAVANJA VREMENA:",
        error
      );

      setError(
        "Nije moguće učitati vremensku prognozu."
      );

    } finally {
      setLoading(false);
    }
  };

   fetchVreme();

}, []);

  const handleFilterChange = (mesto: string) => {
        setIzabranoMesto(mesto);
  };

  const filtriraneLokacije = izabranoMesto === "sve" ? vremeLokacije : 
        vremeLokacije.filter(location => location.name === izabranoMesto);

  return (
    <div className="weather-page">
      <div className="weather-header">
        <h1>Vremenska prognoza</h1>
        <FilterDugme
            samoMesto={true}
            onFilterChange={handleFilterChange}
        />
      </div>

      {loading && (
        <p className="weather-loading">
          Učitavanje vremenske prognoze...
        </p>
      )}

      {error && (
        <p className="weather-error">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="weather-list">
          {filtriraneLokacije.map((location) => {

            if (!location.vreme) {
              return null;
            }

            return (
              <VremeCard
                key={location.name}
                naziv={location.name}
                vreme={location.vreme!}
              />
            );
        })}
      </div>
)}

    </div>
  )
}

export default Vreme