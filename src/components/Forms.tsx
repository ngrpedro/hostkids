const Forms = () => {
  return (
    <div className="space-y-10">
      {/* maps */}

      <div
        className="flex flex-col items-center justify-center rounded-2xl 
                    border border-gray-300 cursor-pointer hover:bg-slate-50 
                    transition-colors hover:shadow-sm"
      >
        <div className="w-full h-32 bg-gray-200 rounded-t-2xl"></div>
        <p className="py-5 font-semibold text-sm text-slate-600">
          Selecione a localização no mapa
        </p>
      </div>

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
        <p className="form-inputText">Sobre</p>
        <textarea
          className="form-inputInput"
          placeholder="Máximo 200 caracteres"
        />
      </div>

      <div className="form-input">
        <p className="form-inputText">Fotos</p>
        <div
          className="w-24 h-24 rounded-lg
          flex items-center justify-center bg-[#f5f8fa] 
          border-2 border-dashed border-[#d3e2e5] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-slate-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </div>
      </div>

      {/* Visitação */}

      <div className="py-4 border-b border-gray-300">
        <p className="font-semibold text-[28px] leading-[34px] text-[#4d6f80]">
          Visitação
        </p>
      </div>

      <div className="form-input">
        <p className="form-inputText">Instruções</p>
        <textarea className="form-inputInput" />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="form-input">
          <p className="form-inputText">Horário de visita</p>
          <input type="text" className="form-inputInput" />
        </div>
        <div className="form-input">
          <p className="form-inputText">Posso ir aos finais de semana?</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="border border-green-500 bg-green-200 
            flex items-center justify-center 
            font-medium text-base leading-[24px] text-green-900
            py-3 px-6 rounded-md
            hover:bg-green-500 hover:text-white transition-colors"
            >
              Sim
            </button>
            <button
              className="border border-red-500 bg-red-100 
            flex items-center justify-center 
            font-medium text-base leading-[24px] text-red-600
            py-3 px-6 rounded-md
            hover:bg-red-500 hover:text-white transition-colors"
            >
              Não
            </button>
          </div>
        </div>
      </div>

      <button
        className="w-full bg-[#37c77f] rounded-md py-4 
                text-white font-semibold text-lg leading-[26px]"
      >
        Confirmar
      </button>
    </div>
  );
};

export default Forms;
