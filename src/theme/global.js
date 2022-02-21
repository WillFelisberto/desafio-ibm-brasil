import { createGlobalStyle } from 'styled-components';
import booksBackground from '../assets/books-background.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background-image: linear-gradient(to right, rgb(24, 35, 44), rgb(53, 76, 88));
    background-image:url(${booksBackground});
    background-repeat:no-repeat;
    -webkit-background-size:cover;
    background-attachment: fixed;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;
    background-position:center;
  }
  body, input {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif
  }
   
`;

export default GlobalStyle;
