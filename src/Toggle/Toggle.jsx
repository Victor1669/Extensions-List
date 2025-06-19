import "./Toggle.css";
import ExtLista from "../../data.json";
import { useState } from "react";

export default function Toggle(props) {
  const Ativar = (event) => {
    let ativo = event.target.checked;

    ExtLista[event.target.id].isActive = ativo;
  };
  return (
    <>
      <button className="toggleCont focusOutlineRed">
        <label className="switch">
          <input
            onClick={Ativar}
            id={`${props.chave}`}
            name={props.nome}
            defaultChecked={props.ativo}
            type="checkbox"
          />
          <span className="slider_round"></span>
        </label>
      </button>
    </>
  );
}
