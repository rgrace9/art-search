import Layout from 'components/Layout';
import SearchHero from 'features/SearchHero';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'Lexend', sans-serif;
    
    color: ${props => (props.whiteColor ? 'white' : '#130D05')};
    background-color: #72695d;
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
export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Layout>hello world</Layout>
    </>
  );
}
