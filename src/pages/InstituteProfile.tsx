import { Alarm, ArrowLeft, Image, Info, WhatsappLogo } from "phosphor-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import mapIcon from "../utils/mapIcon";

const InstituteProfile = () => {
  const position: [number, number][] = [[-21.1806395, -50.4204816]];

  return (
    <div>
      <header
        className="bg-[#F4F5F7]  p-8 md:pt-10 pb-28 md:px-14 
                grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
      >
        <div className="col-span-1 md:col-span-2">
          <Link to="/InstituteView">
            <ArrowLeft size={26} color={"#000"} />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <h1 className="text-[34px] font-bold leading-[54px] text-black">
            Inst. Cuidado e Amor
          </h1>
          <p className="text-md leading-[28px] text-black">
            Exercitation laborum labore minim excepteur incididunt quis enim.
            Labore est occaecat veniam.
          </p>
          <p className="text-md leading-[28px] text-black">
            Nulla et mollit officia nulla magna incididunt in velit officia.
            Lorem sint fugiat sit sint esse ipsum minim id magna officia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="border border-black bg-white rounded-lg p-4 md:p-6">
            <Alarm size={28} className="" />
            <p className="mt-5 font-bold text-[16px]">82% Lorem ipson</p>
          </div>
          <div className="border border-black bg-white rounded-lg p-4 md:p-6">
            <Info size={28} className="" />
            <p className="mt-5 font-bold text-[16px]">35% Lorem ipson</p>
          </div>

          <div className="border border-black bg-white rounded-lg p-4 md:p-6">
            <Info size={28} className="" />
            <p className="mt-5 font-bold text-[16px]">35% Lorem ipson</p>
          </div>
          <div className="border border-black bg-white rounded-lg p-4 md:p-6">
            <Alarm size={28} className="" />
            <p className="mt-5 font-bold text-[16px]">82% Lorem ipson</p>
          </div>
        </div>
      </header>

      <div className="relative hidden md:block">
        <div
          className="flex items-start gap-6 p-4 mb-5 md:px-14 
              absolute -top-[60px] flex-wrap"
        >
          <div className="w-48 h-32 flex items-center justify-center bg-white rounded-md m-auto border border-black ">
            <Image size={28} />
          </div>
          <div className="w-48 h-32 flex items-center justify-center bg-white rounded-md m-auto border border-black ">
            <Image size={28} />
          </div>
          <div className="w-48 h-32 flex items-center justify-center bg-white rounded-md m-auto border border-black ">
            <Image size={28} />
          </div>
          <div className="w-48 h-32 flex items-center justify-center bg-white rounded-md m-auto border border-black ">
            <Image size={28} />
          </div>
        </div>
      </div>

      <main className="my-36 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <div className="flex flex-col items-start justify-start gap-6 p-4 md:px-10">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[28px] font-bold leading-[54px] text-black">
              Mais detalhes de visita
            </h1>

            <WhatsappLogo
              size={48}
              className="hover:animate-bounce cursor-pointer"
            />
          </div>{" "}
          <p className="text-lg leading-[28px] text-black">
            Exercitation laborum labore minim excepteur incididunt quis enim.
            Labore est occaecat veniam.
          </p>
          <p className="text-lg leading-[28px] text-black">
            Nulla et mollit officia nulla magna incididunt in velit officia.
            Lorem sint fugiat sit sint esse ipsum minim id magna officia.
          </p>
          <p className="text-lg leading-[28px] text-black">
            Et mollit officia nulla magna incididunt in velit officia. Lorem
            sint fugiat sit sint esse ipsum minim id magna officia.
          </p>
        </div>

        <div
          className="flex flex-col items-center justify-start rounded-2xl mx-12 cursor-pointer group"
        >
          <div className="w-full h-[20rem] bg-gray-200 rounded-t-2xl">
            <MapContainer
              center={[-21.1839454, -50.4384078]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ width: "100%", height: "20rem" }}
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
          <p className="py-5 font-semibold text-sm text-slate-600 group-hover:text-blue-600">
            Ver rotas no Google Maps
          </p>
        </div>
      </main>
    </div>
  );
};

export default InstituteProfile;
