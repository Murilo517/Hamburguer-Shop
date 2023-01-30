import styled from "styled-components";

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  gap: 10px;
  padding: 20px;
  margin-bottom: 20px;

  label {
    color: #999999;
    margin-bottom: 9px;
    background: var(--grey-);
  }

  p {
    color: red;
    background: var(--grey-);
    font-size: 12px;
  }

  input {
    background: #f5f5f5;
    border: 2px solid #f5f5f5;
    border-radius: 8px;
    width: 100%;
    max-width: 263px;
    height: 38px;
    padding: 0px 12px;
  }

  @media screen and (min-width: 700px) {
    max-height: 500px;
    padding: 10px 24px;

    input {
      max-width: 452px;
    }
  }
`;
