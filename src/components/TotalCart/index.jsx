import { StyledTotal } from "./style";

export const TotalCart = ({ total, removeAll }) => {
  return (
    <StyledTotal>
      <div className="divTotal">
        <p>Total</p>
        <span>R$ {total}</span>
      </div>
      <div className="divBtn">
        <button className="btnRemoveAll" onClick={removeAll}>
          Remover Todos
        </button>
      </div>
    </StyledTotal>
  );
};
