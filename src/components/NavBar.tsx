import { Rows } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menus = [
  { menu: "Ver mapa", view: "InstituteView" },
  { menu: "Nova instituição", view: "InstituteProfile" },
  { menu: "Fale com a gente", view: "ContactUs" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className=" p-4 md:px-14 md:py-5 group delay-100 relative
              flex items-center justify-between gap-3 border-b border-black"
    >
      <Link to="/">
        <p className="text-[#18191F] font-extrabold tracking-wider text-[26px]">
          host<span className="text-[#FFBD12]">kids</span>
        </p>
      </Link>
      <div className="hidden md:flex items-center justify-between gap-3">
        {menus.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/${item.view}`}
              className=" p-[10px] font-extrabold flex items-center justify-center gap-3"
            >
              {item.menu}
            </Link>
          );
        })}
      </div>
      <div className="block md:hidden">
        <button onClick={() => setOpen(!open)}>
          <Rows size={28} />
        </button>

        {open ? (
          <ul className="absolute top-[72px] left-0 bg-white w-full">
            <li>
              {menus.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={`/${item.view}`}
                    onClick={() => setOpen(!open)}
                    className=" p-[10px] font-extrabold flex items-center justify-center gap-3"
                  >
                    {item.menu}
                  </Link>
                );
              })}
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavBar;
