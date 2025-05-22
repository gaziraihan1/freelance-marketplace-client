import React, { useEffect } from 'react';
import Banner from './Banner';
import FeaturedTask from './FeaturedTask';
import BuyerReview from './BuyerReview';
import Hire from '../pages/Hire';

const Home = () => {
     useEffect(() => {
        document.title = "Freelance task MP | Home"
      })
    return (
        <div className='mt-2 md:mt-10 lg:mt-18'>
            <Banner />
            <FeaturedTask />
            <Hire />
            {/* <BuyerReview /> */}
        </div>
    );
};

export default Home;