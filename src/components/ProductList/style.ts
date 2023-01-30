import styled from "styled-components";

export const StyledListProduct = styled.ul`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  padding: 15px 0px;

  @media screen and (min-width: 700px) {
    overflow: unset;
    flex-wrap: wrap;
    gap: 45px;
  }
`;
