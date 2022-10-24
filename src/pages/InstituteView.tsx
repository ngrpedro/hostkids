import { Warning } from "phosphor-react";
import AllPinsMap from "../components/AllPinsMap";

const InstituteView = () => {
  return (
    <div className="relative">
      <AllPinsMap />
      <div className="absolute z-[10000] top-10 left-10 md:left-40 p-4 bg-[#0089A5] rounded-lg text-white
                  flex items-center justify-center gap-4 text-lg font-medium">
        <Warning size={28} />
        Selecione no mapa a instituição para saber mais!!
      </div>
    </div>
  );
};

export default InstituteView;
