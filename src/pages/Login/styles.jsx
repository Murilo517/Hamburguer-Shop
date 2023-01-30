import styled from "styled-components";
import { Link as linkLogin } from "react-router-dom";

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 20px;
  gap: 15px;

  .divLoginAndForm {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: solid 1px #f5f5f5;
  }

  .divLoginAndForm > p{
    color: #999999;
    align-items: center;
    max-width: 280px;
    text-align: center;

  }


  .divBurguer {
    display: flex;
    flex-direction: column;
  }

  .divIconDescription {
    border: solid 1px #f5f5f5;
    padding: 20px;
  }

  .divIconDescription > p {
    color: #999999;
    align-items: center;
    max-width: 280px;
  }

  .logo {
    max-width: 230px;
    max-height: 35px;
  }

  .imgDot {
    display: none;
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

    .imgDot {
      display: initial;
      max-width: 180px;
      max-height: 80px;
    }

    .divLoginAndForm {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      max-width: 350px;
      height: 100%;
      max-height: 500px;
      border: solid 1px #f5f5f5;
      padding: 28px 24px;
    }

    .divIconDescription {
      border: solid 1px #f5f5f5;
      padding: 20px;
    }

    .divIconDescription > p {
      color: #999999;
      align-items: center;
      max-width: 280px;
    }

    .divBurguer {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      max-width: 350px;
      height: 100%;
      max-height: 500px;
    }
  }
`;

export const Link = styled(linkLogin)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  color: white;
  width: 100%;
  min-width: 310px;
  min-height: 38px;
  background: #868e96;
  border-radius: 3px;
`;
