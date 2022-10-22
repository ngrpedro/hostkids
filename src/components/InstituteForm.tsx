import { ArrowCircleLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import Forms from "./Forms";

const InstituteForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 scroll-y-8">
      <div className="w-full flex items-center justify-between">
        <Link to="/InstituteView">
          <ArrowCircleLeft
            size={32}
            className="text-slate-600 block lg:hidden"
          />
        </Link>
        <p className="font-medium text-base text-slate-600">
          Criar Instituição
        </p>
        <div></div>
      </div>
      <div className="w-full p-10 bg-white rounded-2xl space-y-8">
        <div className="py-4 border-b border-gray-300">
          <p className="font-semibold text-[28px] leading-[34px] text-[#4d6f80]">
            Dados
          </p>
        </div>

        <Forms />
      </div>
    </div>
  );
};

export default InstituteForm;
