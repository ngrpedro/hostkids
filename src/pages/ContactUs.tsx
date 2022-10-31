import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import Forms from "../components/Forms";

const ContactUs = () => {
  return (
    <div>
      <header
        className="bg-[#F4F5F7] p-8 md:pt-20 pb-28 md:px-14 border-b-2 border-black
                grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
      >
        <div className="md:hidden">
          <Link to="/InstituteView">
            <ArrowLeft size={28} color={"#000"} />
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <h1 className="text-[34px] font-bold leading-[54px] text-black">
            Deserunt dolore non in minim laboris enim.
          </h1>
          <p className="text-lg leading-[28px] text-black">
            Exercitation laborum labore minim excepteur incididunt quis enim.
            Labore est occaecat veniam.
          </p>
          <p className="text-lg leading-[28px] text-black">
            Nulla et mollit officia nulla magna incididunt in velit officia.
            Lorem sint fugiat sit sint esse ipsum minim id magna officia.
          </p>
        </div>
      </header>
      <Forms />
    </div>
  );
};

export default ContactUs;
