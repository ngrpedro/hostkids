import { gql, useQuery } from "@apollo/client";
import { Check } from "phosphor-react";
import { Link } from "react-router-dom";
import InstituteFilter from "./InstituteFilter";

const GET_INSTITUTES_QUERY = gql`
  query {
    allInstitutes {
      id
      name
      adress
      description
      images {
        url
      }
      openOnWeekends
      category
    }
  }
`;
interface GetInstitutesQueryResponse {
  allInstitutes: {
    id: string;
    name: string;
    adress: string;
    description: string;
    images: {
      url: string;
    }[];
    openOnWeekends: boolean;
    category: string;
  }[];
}

export const AllInstitutes = () => {
  const { data } = useQuery<GetInstitutesQueryResponse>(GET_INSTITUTES_QUERY);
  /* console.log(data?.allInstitutes); */

  return (
    <div>
      <div className="hidden md:block">
        <InstituteFilter />
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data?.allInstitutes.map((item, index) => {
          return (
            <Link key={item.id} to={`/InstituteView/${item.id}`}>
              <div className="border border-gray-200 bg-white rounded-xl overflow-hidden h-full hover:shadow-md transition-all delay-100">
                <div className="bg-gray-200 relative">
                  <img src={item.images[index].url} alt="teste" />
                  {item.openOnWeekends ? (
                    <div
                      className="flex items-start justify-start gap-1 py-1 px-3 text-[12px]
                              absolute top-2 left-2 bg-green-200 bg-opacity-70 border 
                              border-green-900 text-green-900 rounded-full"
                    >
                      Finais de semana <Check size={16} />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="p-4 space-y-5 md:space-y-4">
                  <div className="space-y-2">
                    <div className="block mt-1 text-md leading-tight font-semibold text-black">
                      {item.name}
                    </div>
                    <p className="mt-2 text-xs text-slate-900 max-w-xs">
                      {item.adress}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
