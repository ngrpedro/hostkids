import { Link } from "react-router-dom";
import LogoWhite from "../assets/LogoWhite";

const SideBar = () => {
  return (
    <div className="w-[22rem] h-screen p-10 bg-[#0089A5] text-white flex flex-col  justify-between">
      <div className="space-y-[32px]">
        <Link to="/">
          <LogoWhite boxSize={"78"} />
        </Link>

        <div className="space-y-4">
          <p className="font-extrabold text-[30px] leading-[38px] tracking-[0.04em]">
            Escolha uma instituição no mapa
          </p>
          <p className="font-semibold text-lg leading-7 ">
            Muitas crianças estão esperando a sua visita :)
          </p>
        </div>
      </div>

      <div className="space-y-[54px]">
        <div className="flex flex-col gap-3">
          <Link to="/InstituteView"
            className="rounded-md bg-[#23d4e8] p-3 flex items-center justify-center
                hover:bg-[#15C3D6] transition-colors"
          >
            Ver tudo no mapa
          </Link>
          <Link to="/InstituteProfile"
            className="rounded-md bg-[#23d4e8] p-3 flex items-center justify-center
                hover:bg-[#15C3D6] transition-colors"
          >
            Criar nova instituição
          </Link>
        </div>

        <div>
          <p className="font-extrabold text-xl md:text-[24px] md:leading-[28px]">
            Araçatuba
          </p>
          <p className="font-semibold md:text-[18px] md:leading-[34px]">
            São Paulo
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
