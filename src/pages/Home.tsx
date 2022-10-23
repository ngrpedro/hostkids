import { ArrowFatLinesRight } from "phosphor-react";
import { Link } from "react-router-dom";
import Kids from "../assets/childrens.png";
import LogoWhite from "../assets/LogoWhite";

const Home = () => {
  return (
    <div className="p-8 sm:px-20 py-10 text-white bg-[#0089A5] lg:h-[100vh]
                    flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <LogoWhite boxSize={"108"} />
          <div>
            <p className="font-extrabold text-xl md:text-[36px] md:leading-[42px]">
              Araçatuba
            </p>
            <p className="font-semibold md:text-[20px] md:leading-[34px]">
              São Paulo
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
          <p
            className="mt-5 font-semibold text-[34px] sm:text-[42px] max-w-[484px] 
                      leading-[55px] sm:leading-[66px] tracking-[0.03em]"
          >
            Encontre instituições de acolhimento infantil e mude o dia de muitas
            crianças.
          </p>
          <div className="max-w-[550px] object-cover">
            <img src={Kids} alt="" className="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <p className="font-normal sm:font-semibold text-[17px] leading-[28px] max-w-2xl">
          Tenha acesso as informações de instituições de acolhimento infantil da
          sua cidade e mude o dia de muitas crianças
        </p>

        <Link
          to="/InstituteView"
          className="bg-[#FFD666] p-3 rounded-full animate-pulse"
        >
          <ArrowFatLinesRight className="text-cyan-900" />
        </Link>
      </div>
    </div>
  );
};
export default Home;
