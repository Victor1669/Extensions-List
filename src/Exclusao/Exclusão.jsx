import "./Exclusao.css";

export default function Exclusao(props) {
  return (
    <>
      <div ref={props.referencias[0]} className="exclusionCont">
        <div className="confirmCont">
          <h2>Tem certeza de que quer excluir essa extensão?</h2>
          <div className="btnConfirmCont">
            <button
              className="pageButton confirm focusOutlineRed"
              onClick={props.funcoes[0]}
            >
              Cancelar
            </button>
            <button
              className="btnRemove confirm focusOutlineRed"
              ref={props.referencias[1]}
              onClick={() => {
                props.funcoes[0]();
                props.funcoes[1]();
              }}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
