import { ArrowRight, Image, MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";

const AllInstitutes = () => {
  const institutes = [
    {
      name: "Caminho das ciranças",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
      openWeekends: true,
    },
    {
      name: "Crianças e alegria",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
      openWeekends: false,
    },
    {
      name: "Sempre juntos",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
      openWeekends: false,
    },
    {
      name: "Sempre juntos",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
      openWeekends: true,
    },
    {
      name: "Sempre juntos",
      adress: "Rua Santos Bilac, 6584 - Monterrey",
      openWeekends: false,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="p-4 flex">
          <input
            type="text"
            className="py-2 px-4 rounded-l-md bg-gray-100 w-full"
            placeholder="Pesquisar"
          />
          <button className="p-3 rounded-r-md bg-[#FFBD12]">
            <MagnifyingGlass size={24} />
          </button>
        </div>
        <div className="py-2 px-4">
          <select
            name=""
            id=""
            className="py-[14px] px-4 rounded-md bg-gray-100 w-full"
          >
            <option value="">teste</option>
            <option value="">teste</option>
          </select>
        </div>
      </div>
      <div
        className="flex flex-wrap gap-8 md:p-4 h-[38rem] m-4 overflow-y-auto scrollbar-thin
                 scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        {institutes.map((item, index) => {
          const { name, adress, openWeekends } = item;
          return (
            <div
              key={index}
              className="max-w-sm mx-auto md:mx-0 bg-white rounded-xl overflow-hidden"
            >
              <div className="md:shrink-0 bg-gray-200">
                <Image size={28} className="h-44 m-auto object-cover" />
              </div>
              <div className="m-auto md:m-0 p-4 space-y-2 md:space-y-4">
                {openWeekends ? (
                  <span className="rounded-full border border-green-900 bg-green-200 text-green-900 py-1 px-4 text-xs">
                    Finais de semana
                  </span>
                ) : (
                  ""
                )}
                <div className="space-y-2">
                  <div className="block mt-1 text-xs leading-tight font-medium text-black">
                    {name}
                  </div>
                  <p className="mt-2 text-xs text-slate-600 max-w-xs">{adress}</p>
                </div>

                <Link
                  to="/"
                  className="flex items-start justify-start gap-2 hover:underline underline-offset-1"
                >
                  <p className="text-xs text-slate-600">Conhecer</p>
                  <ArrowRight size={16} className="text-slate-600" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllInstitutes;
