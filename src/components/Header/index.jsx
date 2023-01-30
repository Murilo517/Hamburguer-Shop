import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CartContext } from "../../contexts/CartContext";
import { InputSearch } from "../InputSearch";
import { IconCart, IconLogOut, StyledHeader } from "./styles";



export const Header = () => {

  const{ setOpen } = useContext(CartContext)

  const navigate = useNavigate();

  const logOut = () => {
    navigate("/");

    localStorage.removeItem("Token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
  };


  return (
    <StyledHeader>
     <div className="divHeader">
        <div className="divImg">
          <img src={logo} alt="" />
        </div>
        <div className="searchAndIcons">
          <InputSearch/>
          <IconCart onClick={()=>setOpen(true)}/>
          <IconLogOut onClick={logOut}/>
        </div>
      </div>
    </StyledHeader>
  );
};
