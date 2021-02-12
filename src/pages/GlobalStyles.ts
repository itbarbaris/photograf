import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, 
  body,
  #__next {
    width: 100%;
    height: 100%;
  }

  #__next {
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: lightseagreen;
    color: #b8c6c3;
    overflow: hidden;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #b8c6c3;
  }
`;

export default GlobalStyle;
