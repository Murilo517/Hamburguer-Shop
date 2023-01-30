import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 80%;

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    width: 80%;
    max-width: 1200px;
    min-height: 100vh;
    height: auto;
  }

  .divHeaderCart {
    width: 100%;
  }
`;
