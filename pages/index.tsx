import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className='text-3xl font-bold bg-red-500'>Body (tailwinds is installed)</h1>
    </Layout>
  )
}

export default Home
