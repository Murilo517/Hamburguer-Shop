import styled from "styled-components";
import { Link as linkHeader } from "react-router-dom";

export const StyledPageRegister = styled.div`
  display: flex;
  justify-content: center;

  .divForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px #f5f5f5;
  }
  .divCadastro {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 500px;
    gap: 20px;
    padding: 20px;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  a {
    color: #828282;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }

  span {
    color: #868e96;
  }

  button {
    width: 100%;
    max-width: 278px;
    height: 48px;
    background: #f5f5f5;
    border-radius: 8px;
    color: #828282;
    margin-top: 10px;
  }
  button:hover {
    background: var(--color-primary);
    color: black;
  }

  button:focus {
    background: var(--color-primary);
  }

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    width: 80%;
    max-width: 1200px;
    min-height: 100vh;
    height: auto;
    align-items: center;
    margin: 0 auto;
    padding: unset;
    gap: 50px;
  }
`;

export const StyledBurguerDiv = styled.div`
  display: none;

  h1 {
    height: 100%;
    min-height: 17px;

    width: 100%;
    min-width: 98px;

    color: var(--color-primary);
  }

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 350px;
    height: 100%;
    max-height: 500px;
  }

  .logo {
    max-width: 230px;
    max-height: 35px;
  }

  .imgDot {
    display: initial;
    max-width: 180px;
    max-height: 80px;
  }

  .divDescription {
    border: solid 1px #f5f5f5;
    padding: 20px;
  }

  .divDescription > p {
    color: #999999;
    align-items: center;
    max-width: 280px;
  }
`;

export const Link = styled(linkHeader)`
  color: var(--grey-0);
  text-decoration: none;
  padding: 12px;
  background: #212529;
  border-radius: 4px;
`;
