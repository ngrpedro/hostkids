import { ArrowLeft, PaperPlaneTilt } from "phosphor-react";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <div className="space-y-10 mb-20 ">
      <header
        className="bg-[#1947E5] p-8 md:pt-20 pb-28 md:px-14 border-b-2 border-black
                grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
      >
        <div className="md:hidden">
          <Link to="/InstituteView">
            <ArrowLeft size={28} color={"#fff"} />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <h1 className="text-[34px] font-bold leading-[54px] text-white">
            Deserunt dolore non in minim laboris enim.
          </h1>
          <p className="text-lg leading-[28px] text-white">
            Exercitation laborum labore minim excepteur incididunt quis enim.
            Labore est occaecat veniam.
          </p>
          <p className="text-lg leading-[28px] text-white">
            Nulla et mollit officia nulla magna incididunt in velit officia.
            Lorem sint fugiat sit sint esse ipsum minim id magna officia.
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-8 md:px-14 space-y-8">
          <h1
            className="font-bold text-[26px] leading-[54px] text-[#18191F]
        "
          >
            Ut elit incididunt mollit.
          </h1>
          <div className="space-y-8">
            <div className="form-input">
              <p className="font-bold text-base">Nome</p>
              <input
                type="text"
                className="border-2 border-black bg-white py-3 px-8 rounded-2xl w-full"
              />
            </div>

            <div className="form-input">
              <p className="font-bold text-base">Numero de WhatsApp</p>
              <input
                type="text"
                className="border-2 border-black bg-white py-3 px-8 rounded-2xl w-full"
                placeholder="(xx) xxxxx-xxxx"
              />
            </div>
          </div>

          <div className="form-input">
            <p className="font-bold text-base">Observações</p>
            <textarea
              className="border-2 border-black bg-white py-3 px-8 rounded-2xl w-full"
              placeholder="Máximo 200 caracteres"
            />
          </div>
          <button
            className=" bg-[#FFBD12] p-4 rounded-2xl border-2 border-black font-extrabold w-full
          box-shadow-black flex items-center justify-center gap-3"
          >
            Enviar
            <PaperPlaneTilt size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
