import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const AllPinsMap = () => {
  const position = [51.505, -0.09];

  return (
    <div className="w-[300px]">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* <TileLayer
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm8zOTkiLCJhIjoiY2w5ZzFpODZmMnY3dDQxbXZxems2cDYzMiJ9.ZO5_rVpmfVgQzIBfGCFN0g`}
        />
      </MapContainer>
    </div>
  );
};

export default AllPinsMap;
