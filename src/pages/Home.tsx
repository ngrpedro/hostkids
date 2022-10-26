import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";
import Toys from "../assets/toys.png";

const Home = () => {
  return (
    <div
      className="p-8 sm:px-32 py-10 text-gray-900 bg-[#F6EFD9] lg:h-[100vh]
                    flex flex-col justify-between absolute top-0 inset-x-0 gap-10 md:gap-0"
    >
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* <img src={bola} alt="" className="w-14" /> */}
            <p className="text-[#18191F]  tracking-wider font-extrabold text-[44px]">host<span className="text-[#FFBD12]">kids</span></p>
          </div>
          <div>
            <p className="font-extrabold text-xl md:text-[26px] md:leading-[22px]">
              Araçatuba
            </p>
            <p className="font-semibold md:text-[18px] md:leading-[34px]">
              São Paulo
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-20 max-w-[1300px]">
          <div className="flex flex-col items-start gap-16">
            <p
              className="mt-5 font-extrabold text-[34px] md:text-[42px] max-w-[484px] 
            leading-[55px] sm:leading-[56px] tracking-[0.03em]"
            >
              Encontre aqui instituições de acolhimento infantil
            </p>
            <Link
              to="/InstituteView"
              className=" bg-[#FFBD12] p-4 rounded-2xl border-2 border-black font-extrabold
                              box-shadow-black flex items-center justify-center gap-3"
            >
              Ver Instituições no mapa
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
          <div className="">
            <img src={Toys} alt="" className="w-[32rem]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <p className="font-semibold text-[17px] leading-[28px] max-w-2xl">
          Tenha acesso as informações de instituições de acolhimento infantil da
          sua cidade e mude o dia de muitas crianças
        </p>
      </div>
    </div>
  );
};
export default Home;
