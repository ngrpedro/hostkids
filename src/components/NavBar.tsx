import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="bg-[#F6EFD9] p-4 md:px-14 md:py-5 group delay-100
              flex items-center justify-between gap-3 border-b-2 border-black"
    >
      <Link to="/">
        <p className="text-[#18191F] font-extrabold tracking-wider text-[26px]">
          host<span className="text-[#FFBD12]">kids</span>
        </p>
      </Link>
      <div className="flex items-center justify-between gap-3">
        <Link
          to="/InstituteView"
          className=" p-[10px font-extrabold flex items-center justify-center gap-3"
        >
          Ver mapa
        </Link>{" "}
        <Link
          to="/InstituteView"
          className=" p-[10px] font-extrabold flex items-center justify-center gap-3"
        >
          Nova instituição
        </Link>
        <Link
          to="/InstituteView"
          className=" p-[10px] font-extrabold flex items-center justify-center gap-3"
        >
          Fale com a gente
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
