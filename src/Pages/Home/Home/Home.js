import React from 'react';
import { Link } from 'react-router-dom';
import useVehicles from '../../../hooks/useVehicles';
import Banner from '../Banner/Banner';
import ListedVehicle from '../ListedVehicle/ListedVehicle';

const Home = () => {

    const [vechicles] = useVehicles();
    const slicedData = vechicles.slice(0,4);

    return (
        <div>
            <Banner></Banner>
            <div className="row">
                {
                    slicedData.map(slice => <ListedVehicle
                    key={slice.id}
                    vehicle={slice}
                    >
                    </ListedVehicle>)
                }
                <Link to="/manageitems"><button>Manage Inventories</button></Link>
            </div>
            
        </div>
    );
};

export default Home;