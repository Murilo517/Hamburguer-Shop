import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserProviderValue {
  login: ({ email, password }: iUserForm) => void;
  registerUser: ({
    name,
    email,
    password,
    passwordConfirmation,
  }: iRegisterForm) => void;
  user: iUserProviderValue | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
}

export interface iUseState {
  id: string;
  email: string;
  name: string;
}

export interface iUserForm {
  email: string;
  password: string;
}

export interface iRegisterForm {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = async (body: iUserForm) => {
    try {
      const response = await api.post("/login", body);

      const { accessToken, user } = response.data;

      localStorage.setItem("Token", accessToken);

      localStorage.setItem("userId", user.id);

      localStorage.setItem("userName", user.name);

      localStorage.setItem("userEmail", user.email);

      setUser(response.data.user);

      toast.success("Login efetuado com sucesso!", {
        autoClose: 1000,
      });

      navigate("/home");
    } catch (err) {
      toast.error("Confira seus dados!", {});
      console.log(err);
    }
  };

  const registerUser = async (body: iRegisterForm) => {
    try {
      await api.post("/users", body);

      toast.success("Conta criada com sucesso!", {
        autoClose: 1000,
      });

      navigate("/");
    } catch (err) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 2000,
      });
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        setUser,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
