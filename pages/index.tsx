import type { NextPage } from 'next';
import Header from '../components/Header';
import Trending from '../components/Trending';
import CMCtable from '../components/cms-table/CMCtable';

const Home: NextPage = () => {
  console.log("process.env.NEXT_BACKEND_CMC_API_KEY", process.env.NEXT_BACKEND_CMC_API_KEY);
  // d9477590-70a5-4fc0-a13c-c84db452aeed
  return (
    <div className="min-h-screen">
      { /* Header */}
      <Header />
      <div className='mt-10'></div>
      { /* Trending */}
      <Trending />
      <div className='mt-10'></div>
      { /* CMCtable */}
      <CMCtable />
    </div>
  )
}

export default Home
