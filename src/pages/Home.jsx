import React from 'react';
import Carousel from '../components/Carousel';


import CustomerReviews from '../components/CustomerReviews';
import ChooseUs from '../components/ChooseUs';
import TopRatedItems from '../components/TopRatedItems';
import Categories from '../components/Categories';
import Promotional from '../components/Promotional';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            
            <Carousel></Carousel>
            
            <TopRatedItems/>
            <Categories/>
            <Promotional/>
            <ChooseUs></ChooseUs>
            <CustomerReviews></CustomerReviews>
            <Newsletter/>
            
        </div>
    );
};

export default Home;