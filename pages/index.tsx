import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import SearchBar from '../components/search/SearchBar';
import SearchResult from '../components/search/SearchResult';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <SearchBar />
        <SearchResult />
      </>
    </Layout>
  )
}

export default Home
