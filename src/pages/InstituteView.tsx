import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";
import AllPinsMap from "../components/AllPinsMap";

const InstituteView = () => {
  const institutes = [
    {
      name: "Caminho das ciranças",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
    },
    {
      name: "Crianças e alegria",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
    },
    { name: "Sempre juntos", adress: "Rua Santos Bilac, 6584 - Monterrey" },
    { name: "Olhar e amor", adress: "Rua Santos Bilac, 6584 - Monterrey" },
    {
      name: "Instituição Caminhando",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
    },
    { name: "Sempre ciranças", adress: "Rua Santos Bilac, 6584 - Monterrey" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 p-8 sm:px-32 py-10 h-screen gap-10">
      <div className="space-y-10">
        <p className="font-extrabold text-[14px] md:text-[32px]">
          Instituições cadastradas atualmente:
        </p>

        <div className="form-input">
          <input
            type="text"
            className="border-2 border-black bg-white py-3 px-6 rounded-2xl w-full placeholder:font-bold"
            placeholder="Pesquisar"
          />
        </div>

        <div>
          <ul className="flex flex-col items-start justify-start space-y-4 max-h-[25rem] pr-10
                        overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {institutes.map((item, index) => {
              const { name, adress } = item;
              return (
                <li
                  key={index}
                  className="p-6 border-2 border-black flex items-center justify-between gap-8 rounded-2xl w-full"
                >
                  <div className="">
                    <p className="font-extrabold text-[17px] leading-[22px]">
                      {name}
                    </p>
                    <span className="font-bold text-xs text-[#F95A2C]">
                      {adress}
                    </span>
                  </div>
                  <Link
                    to="/InstituteProfile"
                    className="rounded-full p-2 bg-[#F95A2C]"
                  >
                    <ArrowRight size={22} weight="bold" color="#fff" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <AllPinsMap w={"100%"} h={"100%"} />
    </div>
  );
};

export default InstituteView;
