import styled from "styled-components";

export const StyledNewCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 365px;
  margin-top: 15px;

  img {
    width: 100%;
    max-width: 70px;
    height: 100%;
    max-height: 70px;
    background: var(--grey-20);
    border-radius: 5px;
  }

  .divCard {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: var(--grey-0);
  }

  .divHeaderCart {
    width: 100%;
    background: var(--color-primary);
    border-radius: 5px 5px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 65px;
  }
  .x{
      margin-right: 15px;
      width: 15px;
      height: 10px;
      color: white;
    }


  .divHeaderCart > h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: white;
    margin-left: 1.25rem;
  }



  .emptyCard {
    width: 100%;
    min-height: 130px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--grey-0);
    border-radius: 0px 0px 5px 5px;
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: black;
  }

  @media screen and (min-width: 700px) {
    .divHeaderCart {
      max-width: 365px;
      max-height: 65px;
      height: 100%;
      width: 100%;
      background: var(--color-primary);
      border-radius: 5px 5px 0px 0px;
    }


    .emptyCard {
      max-width: 382px;
      width: 100%;
      max-height: 130px;
      height: 100%;
      background: var(--grey-0);
      border-radius: 0px 0px 5px 5px;
    }
  }
`;


export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.571);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`