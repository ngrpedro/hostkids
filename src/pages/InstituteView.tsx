import { Info } from "phosphor-react";
import { useState } from "react";
import AllInstitutes from "../components/AllInstitutes";
import AllPinsMap from "../components/AllPinsMap";

const InstituteView = () => {
  const [mapView, setMapView] = useState(true);
  console.log(mapView);
  return (
    <div className="h-screen">
      <div className="col-span-2 lg:h-72 grid grid-cols-1 md:grid-cols-2 p-4 md:p-10 gap-8">
        <div className="flex flex-col items-start gap-8 m-auto">
          <p className="font-extrabold text-[18px] md:text-[24px] sm:leading-[36px] tracking-[0.03em]">
            Encontre instituições de acolhimento infantil
          </p>
          <p className="font-semibold text-[16px] leading-[28px]">
            Tenha acesso as informações de instituições de acolhimento infantil
            da sua cidade e mude o dia de muitas crianças
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center gap-5 md:m-auto md:pl-4">
          <div className="border border-black rounded-lg p-4 md:p-6">
            <Info size={28} />
            <p className="mt-5 font-semibold text-[20px] leading-[40px]">
              Aracatuba
            </p>
            <p className="font-normal text-sm leading-[28px]">
              Fugiat elit dolore excepteur.
            </p>
          </div>
          <div className="border border-black rounded-lg p-4 md:p-6">
            <Info size={28} />
            <p className="mt-5 font-semibold text-[20px] leading-[40px]">
              Estatísticas
            </p>
            <p className="font-normal text-sm leading-[28px]">
              Eu ea consequat occaecat.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 ">
        <AllInstitutes />
        <AllPinsMap />
      </div>

      {/* *********
       ********** */}
      <div className="md:hidden">
        <div className="col-span-2 flex items-center justify-center p-4">
          <button
            className={`p-2 text-sm font-semibold rounded-l-2xl w-full ${
              mapView ? "bg-[#FFBD12]" : "bg-[#ffebb7]"
            }`}
            onClick={() => setMapView(true)}
          >
            Ver Mapa
          </button>
          <button
            className={`p-2 text-sm font-semibold rounded-r-2xl w-full ${
              !mapView ? "bg-[#FFBD12]" : "bg-[#ffebb7]"
            }`}
            onClick={() => setMapView(false)}
          >
            Ver Lista
          </button>
        </div>

        {mapView ? <AllPinsMap /> : <AllInstitutes />}
      </div>
    </div>
  );
};

export default InstituteView;
