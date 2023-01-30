import styled from "styled-components";

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: var(--grey-);
  span {
    color: red;
    background: var(--grey-);
  }

  label {
    color: #999999;
    background: var(--grey-);
    font-family: "inter";
  }

  button {
    background: var(--color-primary);
    border: 1.2px solid var(--color-primary);
    border-radius: 4px;
    padding: 10px 20px;
    width: 100%;
    min-width: 310px;
    color: white;
  }



  button:focus {
    background-color: var(--color-primary-50);
  }
`;
