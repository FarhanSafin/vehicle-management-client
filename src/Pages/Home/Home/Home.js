import React from 'react';
import { Link } from 'react-router-dom';
import useVehicles from '../../../hooks/useVehicles';
import Banner from '../Banner/Banner';
import ListedVehicle from '../ListedVehicle/ListedVehicle';
import './Home.css'

const Home = () => {

    const [vechicles] = useVehicles();
    const slicedData = vechicles.slice(0,6);

    return (
        <div>
            <Banner></Banner>
            <div className="row home">
                {
                    slicedData.map(slice => <ListedVehicle
                    key={slice._id}
                    vehicle={slice}
                    >
                    </ListedVehicle>)
                }
                <Link className='text-center mt-5' to="/managevehicles"><button className='btn btn-secondary'>Manage All Vehicles</button></Link>
            </div>
            
        </div>
    );
};

export default Home;