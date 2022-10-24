import { Alarm, ArrowLeft, Info, WhatsappLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const InstituteProfile = () => {
  return (
    <div>
      <header
        className="bg-[#0089A5] p-8 md:pt-20 pb-28 md:px-14 
                grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
      >
        <div className="md:hidden">
          <Link to="/InstituteView">
            <ArrowLeft size={28} color={"#fff"} />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <h1 className="text-[34px] leading-[54px] text-white">
            Inst. Cuidado e Amor
          </h1>
          <p className="text-lg leading-[28px] text-white">
            Exercitation laborum labore minim excepteur incididunt quis enim.
            Labore est occaecat veniam nulla et mollit officia nulla magna
            incididunt in velit officia. Lorem sint fugiat sit sint esse ipsum
            minim id magna officia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
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
      </header>

      <div className="relative">
        <div
          className="flex items-start gap-8 p-4 mb-5 
              absolute -top-[60px] flex-wrap"
        >
          <div className="w-48 h-32 bg-gray-300 rounded-md m-auto"></div>
        </div>
      </div>

      <main className="my-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <div className="flex flex-col items-start justify-start gap-6 p-4 md:px-10">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[34px] leading-[54px] text-gray-900">
              Mais detalhes de visita
            </h1>

            <WhatsappLogo
              size={48}
              className="hover:animate-bounce cursor-pointer"
            />
          </div>
          <p className="text-lg leading-[28px] text-gray-900">
            Exercitation laborum labore minim excepteur incididunt quis enim.
            Labore est occaecat veniam nulla et mollit officia nulla magna
            incididunt in velit officia. Lorem sint fugiat sit sint esse ipsum
            minim id magna officia.
          </p>
          <p className="text-lg leading-[28px] text-gray-900">
            Elit laboris quis commodo velit cupidatat ad id excepteur est. Ut
            velit ea reprehenderit nostrud reprehenderit enim. Tempor deserunt
            laborum enim eu in elit labore ut ullamco laboris voluptate. Et
            laborum occaecat cillum et. Dolor qui excepteur commodo proident
            nulla laboris sint dolor duis Lorem velit exercitation. Est culpa
            enim mollit ad fugiat aute.
          </p>
        </div>

        <div
          className="flex flex-col items-center justify-start rounded-2xl mx-12
                    border border-gray-300 cursor-pointer hover:bg-slate-50 
                    transition-colors hover:shadow-sm"
        >
          <div className="w-full h-[20rem] bg-gray-200 rounded-t-2xl"></div>
          <p className="py-5 font-semibold text-sm text-slate-600">
            Ver rotas no Google Maps
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstituteProfile;
