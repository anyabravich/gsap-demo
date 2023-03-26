import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next, main {
    height: 100%;
  }
  .letter,
  .word {
    display: inline-block;
  }
  .hljs-copy-button {
    border: none;
    position: absolute;
    right: ${rem(10)};
    top: ${rem(10)};
    width: ${rem(25)};
    height: ${rem(25)};
    background: url("copy.svg");
    cursor: pointer;
    font-size: 0;
  }

  .hljs-copy-alert {
    position: fixed;
    top: ${rem(20)};
    right: ${rem(20)};
    padding: 10px 30px;
    min-width: ${rem(100)};
    background: #ffffff;
    border-left: 4px solid #37B24D;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    z-index: 1;
  }

  .loser [data-flip-front]{
	  background:black;
  }

  .loser [data-flip-img] {
	  filter:saturate(0);
  }

  .flake {
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: cover;
  }

  .flake1 {
    background-image: url("https://assets.codepen.io/32887/flake1.svg");
  }

  .flake2 {
    background-image: url("https://assets.codepen.io/32887/flake2.svg");
  }

  .flake3 {
    background-image: url("https://assets.codepen.io/32887/flake3.svg");
  }

  .flake4 {
    background-image: url("https://assets.codepen.io/32887/flake4.svg");
  }

  .wrapperSnow {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -100px;
    height: calc(100% + 100px);
    width: 100%;
    background: #1c7ed6;
    overflow: hidden;
  }

  .expander {
    width:50px;
    height:40vh;
    border-radius:25px;
    background:black;
    overflow:hidden;
    margin-top:20px;
    margin-left:20px;
  }

  .close {
    font-family:sans-serif;
    font-size:18px;
    line-height:40px;
    transform:translate(155px, 5px);
    background:rgba(255,255,255,0.6);
    border-radius:20px;
    height:40px;
    width:40px;
    text-align:center;
    cursor:pointer;
    box-shadow:1px 1px 4px #333;
  }
`;

export default GlobalStyle;
