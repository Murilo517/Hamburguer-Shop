import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormRegister } from "./styles";
import { useContext } from "react";
import { iRegisterForm, UserContext } from "../../contexts/UserContext";

export const FormRegister = () => {
    
  const { registerUser } = useContext(UserContext);

  const RegisterSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .required("O email é obrigatório")
      .email("Forneça um email válido"),
    password: yup
      .string()
      .required("Coloque sua senha")
      .min(8, "Minimo de 8 caracteres")
      .matches(/(?=.*?[a-z])/, "Necessário ter ao menos uma letra")
      .matches(/(?=.*?[0-9])/, "Necessário ter ao menos um numero")
      .matches(/(?=.*?[#?!@$%^&*-])/, "Necessário ter ao menos um símbolo"),
    passwordConfirmation: yup
      .string()
      .required("Confirme sua Senha")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterForm>({
    resolver: yupResolver(RegisterSchema),
    mode: "onBlur",
  });

  return (
    <StyledFormRegister onSubmit={handleSubmit(registerUser)} noValidate>
      <label htmlFor="idName">Nome</label>
      <input
        id="idName"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      {errors.name?.message && <p>{errors.name.message}</p>}

      <label htmlFor="idEmail">Email</label>
      <input
        id="idEmail"
        type="email"
        placeholder="Digite seu email"
        {...register("email")}
      />
      {errors.email?.message && <p>{errors.email.message}</p>}

      <label htmlFor="idPassword">Senha</label>
      <input
        id="idPassword"
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      {errors.password?.message && <p>{errors.password.message}</p>}

      <label htmlFor="idConfirm">Confirmar senha</label>
      <input
        id="idConfirm"
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("passwordConfirmation")}
      />
      {errors.passwordConfirmation?.message && (
        <p>{errors.passwordConfirmation.message}</p>
      )}

      <button type="submit">Cadastrar</button>
    </StyledFormRegister>
  );
};
