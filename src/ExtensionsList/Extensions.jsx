import Toggle from "../Toggle/Toggle";
import ExtList from "../../data.json";

import Exclusao from "../Exclusao/Exclusão";
import "./Extensions.css";
import "./Filter.css";
import { useEffect, useRef, useState } from "react";

export default function ExtensionsList() {
  useEffect(() => {
    document.getElementsByClassName("pageButton")[0].click();
  }, []);

  const filters = ["All", "Active", "Inactive"];

  const [filterType, setFilterType] = useState(filters[0]);
  const [list, setList] = useState(ExtList);

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const filteredList = list.filter((ext) => {
    if (filterType === filters[0]) return true;
    if (filterType === filters[1]) return ext.isActive === true;
    if (filterType === filters[2]) return ext.isActive === false;
  });

  const setTheme = (event) => {
    document
      .querySelector(".pageButtonActive")
      ?.classList.remove("pageButtonActive");
    event.target.classList.add("pageButtonActive");
  };

  /* EXCLUSÃO */

  const [chave, setChave] = useState();
  let excCont = useRef();
  let excBtn = useRef();

  const remocao = () => {
    setList((prevList) => prevList.filter((ext) => ext.key !== chave));
  };

  const exclusao = (key) => {
    excCont.current.style.display = "grid";
    document.body.style.overflowY = "hidden";
    setChave(key);
  };

  const remDivRemove = () => {
    excCont.current.style.display = "none";
    document.body.style.overflowY = "scroll";
  };

  return (
    <>
      <Exclusao
        funcoes={[remDivRemove, remocao]}
        referencias={[excCont, excBtn]}
      />
      <div id="pagiCont">
        <h1 className="filterTitle">Extension List</h1>
        <div className="listButtons">
          {filters.map((texto, index) => (
            <button
              key={index}
              className="focusOutlineRed pageButton"
              onClick={() => {
                handleFilter(texto);
                setTheme(event);
              }}
            >
              {texto}
            </button>
          ))}
        </div>
      </div>

      <div className="extensionContainer">
        {filteredList.map((ext) => (
          <div key={ext.key} className="extCont">
            <img src={ext.logo} alt={ext.name} />
            <h3>{ext.name}</h3>
            <p>{ext.description}</p>
            <button
              className="btnRemove focusOutlineRed"
              onClick={() => exclusao(ext.key)}
            >
              Remove
            </button>
            <Toggle chave={ext.key - 1} nome={ext.name} ativo={ext.isActive} />
          </div>
        ))}
      </div>
    </>
  );
}
