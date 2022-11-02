import { gql, useQuery } from "@apollo/client";
import { ArrowRight, Image } from "phosphor-react";
import { Link } from "react-router-dom";
import InstituteFilter from "./InstituteFilter";

const GET_INSTITUTES_QUERY = gql`
  query {
    allInstitutes {
      id
      name
      adress
      description
    }
  }
`;
interface GetInstitutesQueryResponse {
  allInstitutes: {
    id: string;
    name: string;
    adress: string;
    description: string;
  }[];
}

export const AllInstitutes = () => {
  const { data } = useQuery<GetInstitutesQueryResponse>(GET_INSTITUTES_QUERY);
  console.log(data?.allInstitutes);

  return (
    <div>
      <div className="hidden md:block">
        <InstituteFilter />
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data?.allInstitutes.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-gray-200 bg-white rounded-xl overflow-hidden"
            >
              <div className="bg-gray-200">
                <Image size={28} className="h-44 m-auto object-cover" />
              </div>
              <div className="p-4 space-y-5 md:space-y-4">
                <div className="space-y-2">
                  <div className="block mt-1 text-xs leading-tight font-medium text-black">
                    {item.name}
                  </div>
                  <p className="mt-2 text-xs text-slate-600 max-w-xs">
                    {item.adress}
                  </p>
                </div>

                <Link
                  to="/InstituteProfile"
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
