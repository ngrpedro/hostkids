import { Warning } from "phosphor-react";
import AllPinsMap from "../components/AllPinsMap";

const InstituteView = () => {
  return (
    <div className="relative">
      <AllPinsMap />
      <div className="absolute z-[10000] top-10 left-14 md:left-[50px] p-4 bg-[#0089A5] rounded-lg text-white
                  flex items-center justify-center gap-4 text-xs md:text-lg font-medium mr-10">
        <Warning size={28} />
        Selecione no mapa a instituição para saber mais!!
      </div>
    </div>
  );
};

export default InstituteView;
