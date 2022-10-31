import { PaperPlaneTilt } from "phosphor-react";

const Forms = () => {
  return (
    <div className="space-y-10 mb-20 ">

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
