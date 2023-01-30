import React, { useContext } from "react";
import { StyledProduct } from "./style";
import BtnAdd from "../Button";
import { toast } from "react-toastify";
import { CartContext } from "../../contexts/CartContext";

export const Product = ({
  id,
  img,
  name,
  category,
  price,
}) => {

  const{ products, setCurrentSale,currentSale} = useContext(CartContext)


  const selectedProduct = (id) => {
    const selectedFood = products.find((selected) => selected.id === id);

    const some = currentSale.some((selectedFood) => {
      return selectedFood.id === id;
    });

    if (some) {
      toast("Não é possível adicionar 2 itens iguais", {
        autoClose: 2000,
        type: "error",
      });
    } else {
      setCurrentSale([...currentSale, selectedFood]);
      toast('Item adicionado com sucesso',{
        type: 'success',
        autoClose: 1000
      })
    }
  };

  return (
    <StyledProduct key={id}>
      <div className="divImg">
        <img src={img} alt="Alimento" />
      </div>
      <div className="divNameAndBtn">
        <p className="nameProduct">{name}</p>
        <p className="category">{category}</p>
        <p className="price">R$ {price}</p>
        <BtnAdd selectedProduct={selectedProduct} id={id} />
      </div>
    </StyledProduct>
  );
};
