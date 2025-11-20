import React from 'react';
import Carousel from '../components/Carousel';

import CardParent from '../components/CardParent';
import CustomerReviews from '../components/CustomerReviews';
import ChooseUs from '../components/ChooseUs';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            
            <Carousel></Carousel>
            <CardParent></CardParent>
            <ChooseUs></ChooseUs>
            <CustomerReviews></CustomerReviews>
            
        </div>
    );
};

export default Home;