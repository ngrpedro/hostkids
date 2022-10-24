import { MapTrifold, PaperPlaneTilt } from "phosphor-react";
import { Link } from "react-router-dom";
import LogoBlue from "../assets/LogoBlue";
import LogoWhite from "../assets/LogoWhite";

const TopBar = () => {
  return (
    <div
      className="bg-[#0089A5] p-4 md:px-14 md:py-5 group delay-100
                flex items-center justify-between gap-3 hover:bg-white transition-colors hover:shadow-2xl"
    >
      <div className="flex items-center gap-3 ">
        <Link to="/">
          <div className="group-hover:hidden">
            <LogoWhite boxSize={"38"} />
          </div>
          <div className="hidden group-hover:block">
            <LogoBlue boxSize={"38"} />
          </div>
        </Link>
        <p className="font-semibold text-xl text-white group-hover:text-[#0089A5]">
          HOSTKIDS
        </p>
      </div>
      <div className="flex gap-2">
        <Link
          to="/InstituteView"
          className="rounded-md p-2 px-6 text-sm flex items-center justify-center bg-white text-[#11505c] gap-4
                group-hover:bg-[#0089A5] group-hover:text-white transition-colors"
        >
          <MapTrifold size={28} />
          Ver tudo no mapa
        </Link>
        <Link
          to="/InstituteView"
          className="rounded-md p-2 px-6 text-sm flex items-center justify-center bg-white text-[#11505c] gap-2
                group-hover:bg-[#0089A5] group-hover:text-white transition-colors"
        >
          <PaperPlaneTilt size={20} />
          Deseja cadastrar uma instituição?
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
