import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`


:root {
  --font-light: 1.000rem;
  --font-normal: 1.250rem;
  --font-medium: 1.562rem;
  --font-bold: 3.062rem;

  --color-blue: #4B69FD;
  --color-black: #000000;
  --color-coral: #FE652B;
  --color-creme: #FFF9EB;
  --color-gray: #C4C4C4;
  --color-text: #444444;


}




* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`



export default GlobalStyles