import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #__next,
  html, 
  body,
  main {
    height: 100%;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
