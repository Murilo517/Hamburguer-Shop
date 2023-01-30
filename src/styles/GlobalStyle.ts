import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
  
  button{
      cursor: pointer;
      border: none;
      background: transparent;
  }

  
:root {
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #e0e0e0;
    --grey-0: #f5f5f5;
    --white: #ffffff;
  }
  
  h1,
  h2,
  p,
  span,
  li,
  input {
    font-family: "Inter", sans-serif;
  }
  
  .title {
    font-size: 1.625rem;
  }
  
  .title.one {
    font-size: 1.375rem;
  }
  
  .title.two {
    font-size: 1.125rem;
  }
  
  
  @media (max-width: 400px) {
      
  
  }
  
  ul,li{
      list-style: none;
  }
  
`;
