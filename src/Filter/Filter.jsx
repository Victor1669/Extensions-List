import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import "./Filter.css";

export default function Filtro() {
  const [filtro, setFiltro] = useSearchParams("");

  const btn1 = useRef();

  useEffect(() => {
    btn1.current.classList.add("btnActive");
  }, []);

  const changeClass = (btn) => {
    let buttons = document.getElementsByClassName("buttons")[0].children;

    document.querySelector(".btnActive").classList.remove("btnActive");

    buttons[btn].classList.add("btnActive");
  };

  const btns = [
    [{}, "All"],
    [{ filter: "active" }, "Active"],
    [{ filter: "inactive" }, "Inactive"],
  ];

  return (
    <div className="filter">
      <h1>Extensions List</h1>
      <div className="buttons">
        {btns.map((botao, index) => (
          <button
            key={index}
            ref={index ? null : btn1}
            onClick={() => {
              setFiltro(botao[0]);
              changeClass(index);
            }}
            className="backBorder focusOutlineRed filterHover"
          >
            {botao[1]}
          </button>
        ))}
      </div>
    </div>
  );
}
