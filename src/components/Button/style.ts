import styled from "styled-components";

export const Btn = styled.button`
  width: 100%;
  max-width: 106px;
  height: 100%;
  min-height: 40px;
  background: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: white;

  :hover {
    background: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }
`;
