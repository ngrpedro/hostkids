import { MagnifyingGlass } from "phosphor-react";

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
      openWeekends: true,
    },
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
        className="flex flex-wrap gap-12 md:p-4 h-[38rem] m-4 overflow-y-auto scrollbar-thin
                 scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        {institutes.map((item, index) => {
          const { name, adress, openWeekends } = item;
          return (
            <div
              key={index}
              className="max-w-md mx-auto md:mx-0 bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl"
            >
              <div className="md:shrink-1 bg-gray-200">
                <img className="h-48 w-full object-cover" src="" alt="" />
              </div>
              <div className="p-6 space-y-2">
                {openWeekends ? (
                  <div
                    className="flex items-center justify-start px-4 py-1 w-[12rem]
                    uppercase tracking-wide text-sm text-white bg-green-700 font-semibold rounded-sm"
                  >
                    Finais de semana
                  </div>
                ) : (
                  ""
                )}
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {name}
                </a>
                <p className="mt-2 text-slate-600">{adress}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllInstitutes;
