import { Image } from "phosphor-react";
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
        <div className="">
          <div className="flex items-center justify-center border border-black rounded-lg p-4 md:p-6 bg-white w-full h-full">
            <Image size={68} />
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
