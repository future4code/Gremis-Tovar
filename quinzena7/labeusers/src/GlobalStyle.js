import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
height: 100%;
}

body{
margin: 0;
padding: 0;
font-family: sans-serif;
background: linear-gradient(#141e30, #243b55);
}
`;

export default GlobalStyle;
