import { Link } from "react-router-dom";
import AllPinsMap from "../components/AllPinsMap";

const InstituteView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 p-8 sm:px-32 py-10">
      <div className="space-y-10">
        <p className="font-extrabold text-[14px] md:text-[32px]">
          Instituições cadastradas atualmente:
        </p>

        <div>
          <ul className="space-y-4">
            <li className="flex items-center justify-start gap-3">
              <span className="bg-[#FFBD12] border-2 border-black p-2 rounded-full"></span>
              <p className="font-semibold text-[17px] leading-[28px] max-w-2xl">
                Caminho das Crianças
              </p>
              <Link to="/InstituteProfile">
                <div>Ver Mais</div>
              </Link>
            </li>

            <li className="flex items-center justify-start gap-3">
              <span className="bg-[#FFBD12] border-2 border-black p-2 rounded-full"></span>
              <p className="font-semibold text-[17px] leading-[28px] max-w-2xl">
                Olhar e amor
              </p>
              <Link to="/InstituteProfile">
                <div>Ver Mais</div>
              </Link>
            </li>

            <li className="flex items-center justify-start gap-3">
              <span className="bg-[#FFBD12] border-2 border-black p-2 rounded-full"></span>
              <p className="font-semibold text-[17px] leading-[28px] max-w-2xl">
                Crianças e amigos
              </p>
              <Link to="/InstituteProfile">
                <div>Ver Mais</div>
              </Link>
            </li>

            <li className="flex items-center justify-start gap-3">
              <span className="bg-[#FFBD12] border-2 border-black p-2 rounded-full"></span>
              <p className="font-semibold text-[17px] leading-[28px] max-w-2xl">
                Instituição Caminhando
              </p>
              <Link to="/InstituteProfile">
                <div>Ver Mais</div>
              </Link>
            </li>

            <li className="flex items-center justify-start gap-3">
              <span className="bg-[#FFBD12] border-2 border-black p-2 rounded-full"></span>
              <p className="font-semibold text-[17px] leading-[28px] max-w-2xl">
                Em frente
              </p>
              <Link to="/InstituteProfile">
                <div>Ver Mais</div>
              </Link>
            </li>

            <li className="flex items-center justify-start gap-3">
              <span className="bg-[#FFBD12] border-2 border-black p-2 rounded-full"></span>
              <p className="font-semibold text-[17px] leading-[28px] max-w-2xl">
                Sempre juntos
              </p>
              <Link to="/InstituteProfile">
                <div>Ver Mais</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <AllPinsMap w={"100%"} h={"100%"} />
    </div>
  );
};

export default InstituteView;
