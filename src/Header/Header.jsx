import { useEffect, useState } from "react";

import "./Header.css";

import Sun from "../assets/images/icon-sun.svg";
import Moon from "../assets/images/icon-moon.svg";
import LogoDark from "../assets/images/logo.svg";
import LogoLight from "../assets/images/logo-white.svg";

export default function Header() {
  const [tema, setTema] = useState("dark");

  const mudaTema = () => {
    tema == "dark" ? setTema("light") : setTema("dark");
  };

  useEffect(() => {
    document.documentElement.classList = tema;
  }, [tema]);

  return (
    <>
      <header>
        <img src={tema == "dark" ? LogoLight : LogoDark} alt="Logo" />
        <button className="imgCont focusOutlineRed" onClick={mudaTema}>
          <img src={tema == "dark" ? Sun : Moon} alt="Alterar tema" />
        </button>
      </header>
    </>
  );
}
