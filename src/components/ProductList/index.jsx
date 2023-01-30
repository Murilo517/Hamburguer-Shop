import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Product } from "../Product";
import { StyledListProduct } from "./style";

export const ListProduct = () => {

  const{filteredProducts, products} = useContext(CartContext)

  return (
    <div>
      <StyledListProduct>
        {filteredProducts.length !== 0
          ? filteredProducts.map((item) => (
              <Product
                key={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
                price={item.price}
                id={item.id}
              />
            ))
          : products.map((item) => (
              <Product
                key={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
                price={item.price}
                id={item.id}
              />
            ))}
      </StyledListProduct>
    </div>
  );
};
