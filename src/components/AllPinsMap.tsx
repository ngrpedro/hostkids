import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import mapIcon from "../utils/mapIcon";

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
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm8zOTkiLCJhIjoiY2w5ZzFpODZmMnY3dDQxbXZxems2cDYzMiJ9.ZO5_rVpmfVgQzIBfGCFN0g`}
        />

        <Marker position={[51.505, -0.09]} icon={mapIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className={"font-bold"}
          >
            Lar Acolhida
            <Link to="/InstituteProfile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AllPinsMap;
