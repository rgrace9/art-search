import Layout from 'components/Layout';
import SearchHero from 'features/SearchHero';

export default function Home() {
  return (
    
      <Layout>
        <main>
          <SearchHero />
          <div style={{height: '500px'}}>
            
          </div>
        </main>
      </Layout>
    
  );
}