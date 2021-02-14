import styled, { createGlobalStyle } from 'styled-components';

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
    color: #323232;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    overflow: hidden;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
