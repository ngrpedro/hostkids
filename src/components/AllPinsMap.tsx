import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import mapIcon from "../utils/mapIcon";

interface AllPinsMapProps {
  w: string;
  h: string;
}

const AllPinsMap = ({ w, h }: AllPinsMapProps) => {
  const position: [number, number][] = [
    [-21.1806395, -50.4204816],
    [-21.1916682, -50.4420556],
    [-21.1967098, -50.4468621],
  ];

  return (
    <div className="">
      <MapContainer
        center={[-21.1839454, -50.4384078]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ width: `${w}`, height: `${h}` }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVkcm8zOTkiLCJhIjoiY2w5ZzFpODZmMnY3dDQxbXZxems2cDYzMiJ9.ZO5_rVpmfVgQzIBfGCFN0g`}
        />

        {position.map((loc, index) => {
          return (
            <Marker key={index} position={loc} icon={mapIcon}>
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className={"font-bold"}
              >
                <p>Inst. Amor e Carinho</p>
                <Link to="/InstituteProfile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-"
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
          );
        })}
      </MapContainer>
    </div>
  );
};

export default AllPinsMap;
