import styled from "styled-components";

export const StyledInput = styled.input`
  background: var(--grey-2);
  border: 2px solid #333333;
  border-radius: 8px;
  color: #333333;
  width: 100%;
  min-width: 310px;
  height: 38px;
  padding: 0px 12px;

  :focus {
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }
`;
