import { StyledInput } from "./styles";


interface iInput{
  type: string,
  placeholder: string,
  label: string,
  id: string,
  register: Function
}



export const Input = ({ type, placeholder, label, id, register }: iInput) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        id={id}
        placeholder={placeholder}
        type={type}
        {...register(id)}
      ></StyledInput>
    </>
  );
};
