import { Info } from "phosphor-react";
import AllInstitutes from "../components/AllInstitutes";
import AllPinsMap from "../components/AllPinsMap";

const InstituteView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="col-span-2 lg:h-72 grid grid-cols-1 md:grid-cols-2 p-10 gap-8">
        <div className="flex flex-col items-start gap-8 m-auto">
          <p className="font-extrabold text-[18px] md:text-[24px] sm:leading-[36px] tracking-[0.03em]">
            Encontre instituições de acolhimento infantil
          </p>
          <p className="font-semibold text-[16px] leading-[28px]">
            Tenha acesso as informações de instituições de acolhimento infantil
            da sua cidade e mude o dia de muitas crianças
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center gap-5 m-auto md:pl-4">
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
      <AllInstitutes />
      <AllPinsMap />
    </div>
  );
};

export default InstituteView;
