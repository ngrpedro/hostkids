import { ArrowRight, MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";

const AllInstitutes = () => {
  const institutes = [
    {
      name: "Caminho das ciranças",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
    },
    {
      name: "Crianças e alegria",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
    },
    { name: "Sempre juntos", adress: "Rua Santos Bilac, 6584 - Monterrey" } /* 
    { name: "Olhar e amor", adress: "Rua Santos Bilac, 6584 - Monterrey" },
    {
      name: "Instituição Caminhando",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
    },
    { name: "Sempre ciranças", adress: "Rua Santos Bilac, 6584 - Monterrey" }, */,
  ];
  return (
    <div>
      <div className="p-4 max-w-sm flex">
        <input
          type="text"
          className="py-2 px-4 rounded-l-md bg-gray-100 w-full"
          placeholder="Pesquisar"
        />
        <button className="p-3 rounded-r-md bg-[#FFBD12]">
          <MagnifyingGlass size={24} />
        </button>
      </div>
      <div
        className="flex flex-wrap gap-5 md:p-4 h-[38rem] m-4 overflow-y-auto scrollbar-thin
                 scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        {institutes.map((item, index) => {
          const { name, adress } = item;
          return (
            <div key={index}>
              <div className="space-y-6">
                <div className="w-full h-36 bg-gray-200 rounded-md">
                  <img src="" alt="" />
                </div>
                <div className="space-y-1">
                  <p className="font-extrabold text-[17px] leading-[22px]">
                    {name}
                  </p>
                  <p className="font-bold text-[#F95A2C]">{adress}</p>
                  <Link
                    to="/InstituteProfile"
                    className="py-2 pr-2 font-semibold text-sm flex items-center justify-start gap-3 hover:underline underline-offset-2 transition-all"
                  >
                    Conhecer
                    <ArrowRight size={18} weight="bold" />
                  </Link>
                </div>
              </div>
              {/*               <div className="border border-gray-900 rounded-md">
                <div className="bg-gray-300 h-60 w-full rounded-t-md"></div>
                <div className="p-4 flex flex-col gap-2">
                  <p className="font-extrabold text-[17px] leading-[22px]">
                    {name}
                  </p>
                  <span className="font-bold text-xs text-[#F95A2C]">
                    {adress}
                  </span>
                  <div className="w-32">
                    <Link
                      to="/InstituteProfile"
                      className="py-2 pr-2 font-semibold text-sm flex items-center justify-start gap-3 hover:underline underline-offset-2 transition-all"
                    >
                      Conhecer
                      <ArrowRight size={18} weight="bold" />
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllInstitutes;
