import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;

  }
  body{
    background: #8A2BE2;
    text-rendering:optimizeLegibility !important;
    -webkit-font-smoothing:antialiased !important;
  }
`
export default GlobalStyle;
