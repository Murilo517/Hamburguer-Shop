import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CardOfCart from "../CardOfCart";
import { TotalCart } from "../TotalCart";
import { StyledModal, StyledNewCart } from "./style";


const Cart = () => {
  
  
  const{ setCurrentSale, currentSale, setOpen} = useContext(CartContext)


  const removeItem = (id: number) => {
    const removed = currentSale.filter((element) => element.id !== id);

    setCurrentSale(removed);
  };

  const total = currentSale.reduce((actualValue, previousValue) => {
    const price = previousValue.price;

    return actualValue + price;
  }, 0);

  const removeAll = () => {
    setCurrentSale([]);
  };

  return (
    
    <StyledModal>
    <StyledNewCart>
      <div className="divHeaderCart">
        <h2>Carrinho de compras</h2>
        <button onClick={() => setOpen(false)} className="x">
            X
          </button>
      </div>
      <div className="divCard">
        {currentSale.length ? (
          <>
            <CardOfCart currentSale={currentSale} removeItem={removeItem} />
            <TotalCart total={total} removeAll={removeAll} />
          </>
        ) : (
          <div className="emptyCard">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        )}
      </div>
    </StyledNewCart>
    </StyledModal>
  );
};

export default Cart;
