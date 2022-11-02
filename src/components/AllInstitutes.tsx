import { gql, useQuery } from "@apollo/client";
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
                <div className="bg-gray-200">
                  <img src={item.images[index].url} alt="teste" />
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
