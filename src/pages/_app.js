import { createGlobalStyle, ServerStyleSheet } from 'styled-components';
import {color} from 'styles/color';
import {RecoilRoot} from 'recoil';


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

body {
  
  
  /* font-family: 'Lexend', sans-serif; */
  color: ${props => (props.whiteColor ? `${color.lightCream}` : '#130D05')};
  background-color: ${props => (props.lightBackgroundColor ? `${color.lightCream}` : '#72695d')};
  font-size: 62.5%;
  
  label {
    font-size: 1.4rem;
  }
}
* {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
a {
  text-decoration: none;
}


`;

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
