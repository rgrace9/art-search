import Layout from 'components/Layout';
import SearchHero from 'features/SearchHero';
import {GlobalStyle} from 'pages/_app';

export default function Home() {
  return (
    
      <Layout>
        <main>
        <GlobalStyle />
          <SearchHero />
          <div style={{height: '500px'}}>
            
          </div>
        </main>
      </Layout>
    
  );
}