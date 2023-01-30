import styled from "styled-components";

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  width: 100%;
  min-width: 300px;
  height: 100%;
  max-height: 350px;

  :hover {
    border: 2px solid var(--grey-100);
  }

  @media screen and (min-width: 700px) {
    max-width: 300px;
  }

  .nameProduct {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--grey-100);
  }

  .category {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--grey-50);
  }

  .price {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
  }

  .divImg {
    background: var(--grey-0);
    max-width: 300px;
    width: 100%;
    max-height: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
  }

  .divNameAndBtn {
    display: flex;
    flex-direction: column;
    padding: 0.9375rem 1.25rem;
    margin-top: 0.3125rem;
    gap: 0.625rem;
  }

  img {
    width: 100%;
    max-width: 177px;
    height: 100%;
    max-height: 177px;
  }
`;
