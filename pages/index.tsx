import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Search from '../components/search/Search';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Search />
      </>
    </Layout>
  )
}

export default Home
