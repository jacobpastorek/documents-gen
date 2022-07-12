import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, p {
    padding: 0;
    margin: 0;
  }

  input, textarea{
    font-family: 'Ubuntu', sans-serif;
    -webkit-appearance: none;
    outline:none;
    box-shadow:none ;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #__next, html, body{
    height: 100%;
    min-height: 100%;
  }

`;

export default GlobalStyle;
