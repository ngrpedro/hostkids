import { Link } from "react-router-dom";
import bola from "../assets/bola.png";

const NavBar = () => {
  return (
    <div
      className="bg-[#F6EFD9] p-4 md:px-14 md:py-5 group delay-100
              flex items-center justify-between gap-3 border-b-2 border-black box-shadow-black"
    >
      <Link to="/">
        <img src={bola} alt="" className="w-14" />
      </Link>
      <div className="flex items-center justify-between gap-3">
        <Link
          to="/InstituteView"
          className=" bg-[##FFC7DE] p-[10px] rounded-full border-2 border-black font-extrabold
                              box-shadow-black flex items-center justify-center gap-3"
        >
          Ver mapa
        </Link>{" "}
        <Link
          to="/InstituteView"
          className=" bg-[##FFC7DE] p-[10px] rounded-full border-2 border-black font-extrabold
        box-shadow-black flex items-center justify-center gap-3"
        >
          Nova instituição
        </Link>
        <Link
          to="/InstituteView"
          className=" bg-[##FFC7DE] p-[10px] rounded-full border-2 border-black font-extrabold
        box-shadow-black flex items-center justify-center gap-3"
        >
          Fale com a gente
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
