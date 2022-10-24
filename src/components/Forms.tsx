import { ArrowLeft, PaperPlaneTilt } from "phosphor-react";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <div className="space-y-10 mb-20">
      <header
        className="bg-[#0089A5] p-8 md:pt-20 pb-28 md:px-14 
                grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
      >
        <div className="md:hidden">
          <Link to="/InstituteView">
            <ArrowLeft size={28} color={"#fff"} />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <h1 className="text-[34px] leading-[54px] text-white">
            Est adipisicing laboris Lorem.
          </h1>
          <p className="text-lg leading-[28px] text-white">
            Exercitation laborum labore minim excepteur incididunt quis enim.
            Labore est occaecat veniam nulla et mollit officia nulla magna
            incididunt in velit officia. Lorem sint fugiat sit sint esse ipsum
            minim id magna officia.
          </p>
        </div>
      </header>

      <div className="max-w-5xl m-auto space-y-8">
        <h1 className="text-[26px] leading-[54px] text-gray-700
        ">
          Ut elit incididunt mollit.
        </h1>
        <div></div>
        <div className="grid grid-cols-2 gap-5">
          <div className="form-input">
            <p className="form-inputText">Nome</p>
            <input type="text" className="form-inputInput" />
          </div>

          <div className="form-input">
            <p className="form-inputText">Numero de WhatsApp</p>
            <input
              type="text"
              className="form-inputInput"
              placeholder="(xx) xxxxx-xxxx"
            />
          </div>
        </div>

        <div className="form-input">
          <p className="form-inputText">Observações</p>
          <textarea
            className="form-inputInput"
            placeholder="Máximo 200 caracteres"
          />
        </div>

        <button
          className="w-full bg-[#37c77f] rounded-md py-4 flex items-center justify-center gap-5
                text-white font-semibold text-lg leading-[26px]"
        >
          Enviar
          <PaperPlaneTilt size={20} />
        </button>
      </div>
    </div>
  );
};

export default Forms;
