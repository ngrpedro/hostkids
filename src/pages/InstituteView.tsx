import AllInstitutes from "../components/AllInstitutes";
import AllPinsMap from "../components/AllPinsMap";

const InstituteView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="col-span-2 h-72 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start gap-10 m-auto  p-10">
          <p className="font-extrabold text-[18px] md:text-[24px] sm:leading-[36px] tracking-[0.03em]">
            Encontre instituições de acolhimento infantil
          </p>
          <p className="font-semibold text-[16px] leading-[28px]">
            Tenha acesso as informações de instituições de acolhimento infantil
            da sua cidade e mude o dia de muitas crianças
          </p>
        </div>
      </div>
      <AllInstitutes />
      <AllPinsMap />
    </div>
  );
};

export default InstituteView;
