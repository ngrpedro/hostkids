import { Image } from "phosphor-react";
import { useState } from "react";
import AllInstitutes from "../components/AllInstitutes";
import InstituteFilterButtonIcon from "../components/InstituteFilterButtonIcon";

const InstituteView = () => {
  const [mapView, setMapView] = useState(true);

  return (
    <div className="space-y-10 mb-16">
      <div className="px-4 py-10 md:px-10  bg-[#F4F5F7] col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start gap-8 m-auto">
          <p className="text-[34px] font-bold leading-[54px] text-black">
            Encontre instituições e entidades em Araçatuba
          </p>
          <p className="font-semibold text-[16px] leading-[28px]">
            Tenha acesso as informações de instituições de acolhimento infantil
            da sua cidade e mude o dia de muitas crianças
          </p>
        </div>
        <div className="min-h-[15rem]">
          <div className="flex items-center justify-center border border-black 
                        rounded-lg p-4 md:p-6 bg-gray-50 w-full h-full">
            <Image size={68} />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[22px] leading-[28px]">
            Veja nossos parceiros:
          </p>
          <div className="block md:hidden">
            <InstituteFilterButtonIcon />
          </div>
        </div>

        <AllInstitutes />
      </div>
    </div>
  );
};

export default InstituteView;
