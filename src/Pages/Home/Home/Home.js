import React from 'react';
import Banner from '../Banner/Banner';
import ListedVechicles from '../ListedVehicles/ListedVehicles'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ListedVechicles></ListedVechicles>
        </div>
    );
};

export default Home;