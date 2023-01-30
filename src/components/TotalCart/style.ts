import styled from "styled-components";

export const StyledTotal = styled.div`
  .divTotal {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1rem 0.625rem;
    background-color: var(--grey-0);
    border-top: 2px solid var(--grey-20);
    align-items: center;
  }
  .divTotal > span {
    color: var(--grey-50);
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  .divBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grey-0);
    padding: 0px 5px 20px 5px;
    border-radius: 0px 0px 5px 5px;
  }

  .btnRemoveAll {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    width: 100%;
    height: 60px;
    background: var(--grey-20);
    border: 2px solid var(--grey-20);
    border-radius: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: var(--grey-50);
  }

  @media screen and (min-width: 700px) {
    .btnRemoveAll {
      max-width: 343px;
    }

    .divBtn {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--grey-0);
      padding-bottom: 20px;
      border-radius: 0px 0px 5px 5px;
    }
  }
`;
