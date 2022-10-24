import { Alarm, ArrowCircleLeft, Info } from "phosphor-react";
import { Link } from "react-router-dom";
import whatsapp from '../assets/whatsapp.png';

const InstituteDetails = () => {
  return (
    <div className="max-w-3xl m-auto flex flex-col items-center justify-center gap-6 scroll-y-8">
      <div className="w-full flex items-center justify-between">
        <Link to="/InstituteView">
          <ArrowCircleLeft
            size={32}
            className="text-slate-600 block"
          />
        </Link>
        <p className="font-medium text-base text-slate-600">
          Detalhes da instituição
        </p>
        <div></div>
      </div>
      <div className="w-full bg-white rounded-2xl ">
        <div>
          <div className="w-full bg-gray-300 h-60 rounded-t-2xl"></div>
          <div className="flex items-center gap-4 p-4 mb-5">
            <div className="w-32 h-20 bg-gray-300 rounded-md"></div>
            <div className="w-32 h-20 bg-gray-300 rounded-md"></div>
            <div className="w-32 h-20 bg-gray-300 rounded-md"></div>
            <div className="w-32 h-20 bg-gray-300 rounded-md"></div>
          </div>
        </div>
        <div className="p-6 md:p-10 space-y-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
          <h1 className="font-bold text-[40px] leading-[54px] text-[#4D6780]">
            Inst. Cuidado e Amor
          </h1>
          <img src={whatsapp} alt="" className="w-10 cursor-pointer " />
          </div>

          <p className="font-medium text-lg leading-[28px] text-[#5c8599]">
            Presta assistência a crianças de 06 a 15 anos que se encontre em
            situação de risco e/ou vulnerabilidade social.
          </p>

          <div
            className="flex flex-col items-center justify-center rounded-2xl 
                    border border-gray-300 cursor-pointer hover:bg-slate-50 
                    transition-colors hover:shadow-sm max-w-xl"
          >
            <div className="w-full h-52 bg-gray-200 rounded-t-2xl"></div>
            <p className="py-5 font-semibold text-sm text-slate-600">
              Ver rotas no Google Maps
            </p>
          </div>
        </div>
        <div className="p-6 md:p-10 space-y-8 border-t border-gray-200">
          <h1 className="font-bold text-[40px] leading-[54px] text-[#4D6780]">
            Instruções para visita
          </h1>

          <p className="font-medium text-lg leading-[28px] text-[#5c8599]">
            Venha como se sentir a vontade e traga muito amor e paciência para
            dar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-14">
            <div className="border border-blue-800 bg-blue-100 rounded-lg p-4 md:p-6">
              <Alarm size={42} className="text-blue-800" />
              <p className="mt-5 font-semibold text-lg leading-[28px] text-blue-800">
                Horário de visitas
              </p>
              <p className="font-semibold text-lg leading-[28px] text-blue-800">
                Das 18h até 8h
              </p>
            </div>
            <div className="border border-green-800 bg-green-100 rounded-lg p-4 md:p-6">
              <Info size={42} className="text-green-800" />
              <p className="mt-5 font-semibold text-lg leading-[28px] text-green-800">
                Horário de visitas
              </p>
              <p className="font-semibold text-lg leading-[28px] text-green-800">
                Das 18h até 8h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteDetails;
