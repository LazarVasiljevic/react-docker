export interface VremeData{
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
}

export interface LokacijaVreme {
    name: string;
    latitude: number;
    longitude: number;
    vreme?: VremeData;
}