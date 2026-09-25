import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import '../styles/StazaMapa.css';

const markerIcon = new L.Icon({
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
    
interface StazaMapaProps {
        latitude: number;
        longitude: number;
        naziv: string;
        lokacija: string;

    }

function StazaMapa({latitude, longitude, naziv, lokacija}: StazaMapaProps) {

  return (
    <div className="trail-map">
            <h2> Lokacija staze </h2>

            <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                scrollWheelZoom={false}
                className="map"
            >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    position={[
                        latitude,
                        longitude
                    ]}
                    icon={markerIcon}
                >

                    <Popup>
                        <strong>{naziv}</strong>
                        <br />
                        {lokacija}
                    </Popup>
            </Marker>
            </MapContainer>
        </div>
  )
}

export default StazaMapa