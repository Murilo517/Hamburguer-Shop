import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
  const { user} = useContext(UserContext);

  const {loading} = useContext(CartContext)

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};
