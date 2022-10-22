import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const AllPinsMap = () => {
  const position = [51.505, -0.09];

  return (
    <div className="w-[300px]">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} 
      style={{width: '100vw', height: '100vh'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default AllPinsMap;
