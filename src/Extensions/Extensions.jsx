import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Itens from "../../data.json";
import "./Toggle.css";
import "./Extensions.css";

export default function Extensions() {
  const [dados, setDados] = useState(Itens);
  const [filtro, setFiltro] = useSearchParams("");

  const filterType = filtro.get("filter");

  const aplicarFiltro = () => {
    const filtered = dados.filter((produtos) => {
      if (filterType === "active") return produtos.isActive === true;
      if (filterType === "inactive") return produtos.isActive === false;
      return true;
    });

    return filtered;
  };

  const prevRemove = (nome) => {
    const nLista = dados.filter((item) => {
      return item.name != nome;
    });

    setDados(nLista);
  };

  useEffect(() => {
    aplicarFiltro();
  }, [filterType]);

  return (
    <>
      <div className="extensionCont">
        {aplicarFiltro().map((ext) => (
          <div className="extension backBorder" key={ext.name}>
            <img src={ext.logo} alt={ext.name} />
            <h3>{ext.name}</h3>
            <p>{ext.description}</p>

            <button className="toggleCont focusOutlineRed">
              <label className="switch">
                <input
                  onClick={() => (ext.isActive = !ext.isActive)}
                  className="ipt"
                  defaultChecked={ext.isActive}
                  type="checkbox"
                />
                <span className="slider_round"></span>
              </label>
            </button>

            <button
              onClick={() => prevRemove(ext.name)}
              className="removeBtn backBorder focusOutlineRed"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
