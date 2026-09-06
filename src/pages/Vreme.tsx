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

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [vremeLokacije, setVremeLokacije] = useState<LokacijaVreme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [izabranoMesto, setIzabranoMesto] = useState("sve");  

  useEffect(() => {

    const fetchVreme = async () => {

        try {

            setLoading(true);
            setError("");

            if (!API_KEY) {
                throw new Error(
                    "VITE_WEATHER_API_KEY nije definisan."
                );
            }

            const results = await Promise.all(

                lokacije.map(async (location) => {

                    const url = new URL(
                        "https://api.openweathermap.org/data/2.5/forecast"
                    );

                    url.searchParams.append(
                        "lat",
                        location.latitude.toString()
                    );

                    url.searchParams.append(
                        "lon",
                        location.longitude.toString()
                    );

                    url.searchParams.append(
                        "appid",
                        API_KEY
                    );

                    url.searchParams.append(
                        "units",
                        "metric"
                    );

                    url.searchParams.append(
                        "lang",
                        "sr"
                    );

                    const response = await fetch(
                        url.toString()
                    );

                    if (!response.ok) {

                        throw new Error(
                            `OpenWeather greška: ${response.status}`
                        );

                    }

                    const data = await response.json();

                    const groupedDays: {
                        [date: string]: {
                            temperatures: number[];
                            code: number;
                        };
                    } = {};

                    data.list.forEach((item: any) => {

                        const date =
                            item.dt_txt.split(" ")[0];

                        if (!groupedDays[date]) {

                            groupedDays[date] = {
                                temperatures: [],
                                code: item.weather[0].id
                            };

                        }

                        groupedDays[date]
                            .temperatures
                            .push(item.main.temp);

                        if (
                            item.dt_txt.includes(
                                "12:00:00"
                            )
                        ) {

                            groupedDays[date].code =
                                item.weather[0].id;

                        }

                    });


                    const dates = Object.keys(groupedDays).slice(0, 5);

                    return {

                        ...location,
                        vreme: {
                            time: dates,
                            weather_code: dates.map(date =>groupedDays[date].code),
                            temperature_2m_max:dates.map(
                              date =>Math.max(...groupedDays[date].temperatures)
                            ),
                            temperature_2m_min:dates.map(
                              date =>Math.min(...groupedDays[date].temperatures)
                            )
                        }

                    };

                })

            );

            setVremeLokacije(results);

        } catch (error) {

            console.error(
                "Greška prilikom učitavanja vremena:",
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

}, [API_KEY]);

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