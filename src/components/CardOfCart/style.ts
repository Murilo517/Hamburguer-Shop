import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  max-height: 80px;
  padding: 5px;
  align-items: flex-start;
  margin-top: 10px;

  .btnRemove {
    color: #bdbdbd;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    padding: 5px;
  }

  .btnRemove:hover{
    text-decoration-line: underline;
    color: var(--grey-100);
  }


  .divNameCategory {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    gap: 10px;
    width: 65%;
  }

  .divNameCategory > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey-100);
  }

  .divNameCategory > span {
    color: var(--grey-50);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  @media screen and (min-width: 700px) {
    .btnRemove {
      color: #bdbdbd;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      padding: 5px;
    }
  }
`;
