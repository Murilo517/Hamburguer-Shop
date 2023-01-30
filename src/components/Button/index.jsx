import { Btn } from "./style";

const BtnAdd = ({ selectedProduct, id }) => {
  return (
    <>
      <Btn onClick={() => selectedProduct(id)}>Adicionar</Btn>
    </>
  );
};

export default BtnAdd;
