import { ArrowRight, Image } from "phosphor-react";
import { Link } from "react-router-dom";
import InstituteFilter from "./InstituteFilter";

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
      <div className="">
        <InstituteFilter />
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {institutes.map((item, index) => {
          const { name, adress, openWeekends } = item;
          return (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <div className="bg-gray-200">
                <Image size={28} className="h-44 m-auto object-cover" />
              </div>
              <div className="p-4 space-y-2 md:space-y-4">
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
                  <p className="mt-2 text-xs text-slate-600 max-w-xs">
                    {adress}
                  </p>
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
