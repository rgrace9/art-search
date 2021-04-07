import Layout from 'components/Layout';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
  body {
    color: ${props => (props.whiteColor ? 'white' : '#130D05')};
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
`;
export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Layout>hello world</Layout>
    </>
  );
}
