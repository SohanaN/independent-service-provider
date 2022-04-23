import React from 'react';
import Banner from '../Banner/Banner';
import RangeOfTravel from '../RangeOfTravel/RangeOfTravel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <RangeOfTravel></RangeOfTravel>
        </>
    );
};

export default Home;