import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";
import Toys from "../assets/toys.png";

const Home = () => {
  return (
    <div
      className="p-8 sm:px-14 py-10 text-gray-900 bg-white lg:h-[100vh]
                    flex flex-col justify-between absolute top-0 inset-x-0 gap-10 md:gap-0"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* <img src={bola} alt="" className="w-14" /> */}
            <p className="text-[#18191F]  tracking-wider font-extrabold text-[28px]">
              host<span className="text-[#FFBD12]">kids</span>
            </p>
          </div>
          <div>
            <p className="font-extrabold text-xl md:leading-[22px]">
              Araçatuba
            </p>
            <p className="font-semibold text-[16px] leading-[34px]">
              São Paulo
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-20 my-auto h-screen lg:h-[70vh]">
          <div className="flex flex-col items-start gap-10 m-auto">
            <p
              className="font-extrabold text-[34px] md:text-[34px] max-w-[484px]
            leading-[55px] sm:leading-[56px] tracking-[0.03em]"
            >
              Encontre instituições de acolhimento infantil
            </p>
            <p className="font-semibold text-[16px] leading-[28px] max-w-lg">
              Tenha acesso as informações de instituições de acolhimento
              infantil da sua cidade e mude o dia de muitas crianças
            </p>
            <Link
              to="/InstituteView"
              className=" bg-[#FFBD12] py-4 px-14 rounded-2xl border border-black font-semibold
                              flex items-center justify-center gap-3"
            >
              Conhecer
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
          <div className="m-auto">
            <img src={Toys} alt="" className="w-[32rem] m-auto" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-5"></div>
    </div>
  );
};
export default Home;
