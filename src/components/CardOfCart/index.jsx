import React from "react";
import { StyledCard } from "./style";

const CardOfCart = ({ currentSale, removeItem }) => {
  return (
    <div>
      {currentSale.map((sale) => {
        return (
          <StyledCard key={sale.id}>
            <img src={sale.img} alt="Alimento" />
            <div className="divNameCategory">
              <p>{sale.name}</p>
              <span>{sale.category}</span>
            </div>
            <button className="btnRemove" onClick={() => removeItem(sale.id)}>
              Remover
            </button>
          </StyledCard>
        );
      })}
    </div>
  );
};

export default CardOfCart;
