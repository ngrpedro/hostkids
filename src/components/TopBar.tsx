import { Plus } from "phosphor-react";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/LogoWhite";

const TopBar = () => {
  return (
    <div
      className="bg-[#0089A5] p-4
                flex items-center justify-between gap-3 md:px-14"
    >
      <div className="flex items-center gap-3">
        <Link to="/">
          <LogoWhite boxSize={"38"} />
        </Link>
        <p className="font-semibold text-sm text-white ">
          Selecione a instituição que deseja visitar :)
        </p>
      </div>
      <Link to="/InstituteProfile" className="bg-[#FFD666] p-2 rounded-full">
        <Plus size={18} className="text-[#0089A5]" />
      </Link>
    </div>
  );
};

export default TopBar;
