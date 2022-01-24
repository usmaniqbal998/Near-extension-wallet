import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
  padding: 0;
  margin: 0;
  outline: none;
  border: 0px;
  box-sizing: border-box;
}
html{
 font-size:62.5%;
}
body {
    font-family: 'Manrope', sans-serif;
    font-size: 1.6rem;
    background-color:#FFFFFF;
}

a{
  color: #587BE0;
  text-decoration: none;

}
`;

export default GlobalStyles;
