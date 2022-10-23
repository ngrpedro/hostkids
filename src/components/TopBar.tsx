import { Link } from "react-router-dom";
import LogoWhite from "../assets/LogoWhite";

const TopBar = () => {
  return (
    <div
      className="absolute bottom-0 bg-[#0089A5] rounded-2xl z-50 w-8/12 m-12 p-4
                flex items-center gap-3"
    >
      <Link to="/">
        <LogoWhite boxSize={"38"} />
      </Link>
      <p className="font-semibold text-sm text-white ">
        Selecione a instituição que deseja visitar :)
      </p>
    </div>
  );
};

export default TopBar;
