import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0089A5] p-10 flex flex-col items-center justify-center gap-4">
      <p className="text-[14px] text-white">Powered by:: Pedro Soares</p>
      <div className="flex items-center justify-center gap-5">
        <Link to="https://www.linkedin.com/in/pedro-nogueira399/">
          <LinkedinLogo size={28} color="#fff" />
        </Link>
        <Link to="https://github.com/ngrpedro">
          <GithubLogo size={28} color="#fff" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
