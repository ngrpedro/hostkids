import { Alarm, ArrowLeft, Image, Info, WhatsappLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const InstituteProfile = () => {
  return (
    <div>
      <header
        className="bg-[#F4F5F7]  p-8 md:pt-20 pb-28 md:px-14 
                grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
      >
        <div className="md:hidden">
          <Link to="/InstituteView">
            <ArrowLeft size={28} color={"#fff"} />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <h1 className="text-[34px] font-bold leading-[54px] text-black">
            Inst. Cuidado e Amor
          </h1>
          <p className="text-lg leading-[28px] text-black">
            Exercitation laborum labore minim excepteur incididunt quis enim.
            Labore est occaecat veniam.
          </p>
          <p className="text-lg leading-[28px] text-black">
            Nulla et mollit officia nulla magna incididunt in velit officia.
            Lorem sint fugiat sit sint esse ipsum minim id magna officia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="border border-black bg-white rounded-lg p-4 md:p-6">
            <Alarm size={28} className="" />
            <p className="mt-5 font-bold text-[26px] leading-[40px] ">
              Aceitamos visitas.
            </p>
            <p className="font-normal text-lg leading-[28px] ">
              Das 8h até 18h
            </p>
          </div>
          <div className="border border-black bg-white rounded-lg p-4 md:p-6">
            <Info size={28} className="" />
            <p className="mt-5 font-bold text-[26px] leading-[40px] ">
              Final de semana:
            </p>
            <p className="font-normal text-lg leading-[28px] ">
              Abertos das 8h até 18h
            </p>
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
            Et mollit officia nulla magna incididunt in velit officia.
            Lorem sint fugiat sit sint esse ipsum minim id magna officia.
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
