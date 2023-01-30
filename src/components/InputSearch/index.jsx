import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledBtnSearch, StyledForm, StyledInput } from "./styles";

export const InputSearch = () => {

  const{ products, setFilteredProducts} = useContext(CartContext)

  const [FoodName, setFoodName] = useState("");

  const prevent = (event) => {
    event.preventDefault();

    const newFoodName = products.filter((food) =>
      food.name?.toLowerCase().trim().includes(FoodName)
    );

    setFilteredProducts(newFoodName);
  };

  return (
    <div>
      <StyledForm onSubmit={prevent}>
        <StyledInput
          type="text"
          name=""
          id=""
          onChange={(event) => setFoodName(event.target.value)}
        />
        <StyledBtnSearch className="btnSearch">Pesquisar</StyledBtnSearch>
      </StyledForm>
    </div>
  );
};
