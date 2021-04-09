import Layout from 'components/Layout';
import SearchHero from 'features/SearchHero';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';


export default function Home() {
  return (
    <>
      <Layout>
        <SearchHero />
        <div style={{height: '1000px'}}>
          hello world
        </div>
      </Layout>
    </>
  );
}
