import React from 'react';
import "./style.scss"
import HeroBanner from "./heroBanner/HeroBanner"
import Trending from './Tranding/Tranding';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';



function Home() {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular/>
      <TopRated/>
    </div>
  );
}

export default Home;