import { Info } from "phosphor-react";
import { useState } from "react";
import AllInstitutes from "../components/AllInstitutes";

const InstituteView = () => {
  const [mapView, setMapView] = useState(true);

  return (
    <div className="h-screen space-y-10 mb-16">
      <div className="px-4 py-10 md:px-10  bg-[#F4F5F7] col-span-2 lg:h-72 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start gap-8 m-auto">
          <p className="text-[34px] font-bold leading-[54px] text-black">
            Encontre instituições e entidades em Araçatuba
          </p>
          <p className="font-semibold text-[16px] leading-[28px]">
            Tenha acesso as informações de instituições de acolhimento infantil
            da sua cidade e mude o dia de muitas crianças
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center gap-5 md:m-auto md:pl-4">
          <div className="border border-black rounded-lg p-4 md:p-6 bg-white">
            <Info size={28} />
            <p className="mt-5 font-semibold text-[20px] leading-[40px]">
              Aracatuba
            </p>
            <p className="font-normal text-sm leading-[28px]">
              Fugiat elit dolore excepteur.
            </p>
          </div>
          <div className="border border-black rounded-lg p-4 md:p-6 bg-white">
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
      <div className="px-4 md:px-6">
        <p className="font-semibold text-[22px] leading-[28px]">
          Veja nossos parceiros:
        </p>

        <AllInstitutes />
      </div>
    </div>
  );
};

export default InstituteView;
