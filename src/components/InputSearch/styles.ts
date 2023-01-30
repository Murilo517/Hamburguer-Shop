import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  margin-bottom: 20px;

  @media screen and (min-width: 700px) {
    margin-bottom: unset;
  }
`;

export const StyledInput = styled.input`
  width: 80%;
  height: 100%;
  min-height: 60px;
  background: var(--white);
  border: 2px solid #E0E0E0;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 15px;
  gap: 115px;

  :focus{
    border: 2px solid var(--grey-20);
  }

  @media screen and (min-width: 700px) {
    max-height: 60px;
    max-width: 265px;
  }
`;

export const StyledBtnSearch = styled.button`
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  min-width: 107px;
  min-height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: var(--white);

  :hover {
    background: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }

  @media screen and (min-width: 700px) {
    max-width: 107px;
    min-height: 40px;
  }
`;
