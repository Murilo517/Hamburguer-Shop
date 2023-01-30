import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

interface iCartProviderProps {
  children: React.ReactNode;
}

interface iProduct {
  name: string;
  category: string;
  img: string;
  id: number;
  price: number;
}

interface iCartProviderValue {
  currentSale: iProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
  products: iProduct[];
  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  filteredProducts: iProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<never[]>>;
  open: boolean;
  setOpen: Function;
  loading: boolean;
  setLoading: Function;
}

export const CartContext = createContext({} as iCartProviderValue);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const { setUser } = useContext(UserContext);

  const [products, setProducts] = useState<iProduct[]>([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState<iProduct[]>([]);

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadCards = async () => {
      const token = localStorage.getItem("Token");
      const email = localStorage.getItem("userEmail");
      const name = localStorage.getItem("userName");
      const id = localStorage.getItem("userId");

      if (!token) {
        setLoading(false);
        navigate("/");
        return;
      }

      try {
        const { data } = await api.get("/products", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const userReload: any = {
          id: id,
          name: name,
          email: email,
        };

        setUser(userReload);

        setProducts(data);
      } catch (error) {
        localStorage.removeItem("Token");
        localStorage.removeItem("userId");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    loadCards();
  }, [navigate]);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        currentSale,
        setCurrentSale,
        open,
        setOpen,
        loading,
        setLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
