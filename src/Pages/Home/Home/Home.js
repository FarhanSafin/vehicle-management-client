import React from 'react';
import { Link } from 'react-router-dom';
import useVehicles from '../../../hooks/useVehicles';
import Banner from '../Banner/Banner';
import Loading from '../../Shared/Loading/Loading';
import ListedVehicle from '../ListedVehicle/ListedVehicle';
import './Home.css'
import HistoryTeller from '../../HistoryTeller/HistoryTeller';
import Sales from '../../Sales/Sales';

const Home = () => {

    const [vechicles] = useVehicles();
    const slicedData = vechicles.slice(0,6);
    if(vechicles.length === 0){
        return <Loading></Loading>
    }
    else{
        return (
            <div>
                <Banner></Banner>
                <h2 className='text-center mt-5 mb-2'>Available Vehicles</h2>
                <div className="row home">
                    {
                        slicedData.map(slice => <ListedVehicle
                        key={slice._id}
                        vehicle={slice}
                        >
                        </ListedVehicle>)
                    }
                    
                    <Link className='text-center mt-5' to="/managevehicles"><button className='btn btn-secondary'>Manage All Vehicles</button></Link>
                    <h2 className='text-center mt-5'>Our History and Motivation</h2>
                    <HistoryTeller></HistoryTeller>
                    <h2 className='text-center mt-5'>Our Recent Sales</h2>
                    <Sales></Sales>
                </div>
                
            </div>
        );
    }
};

export default Home;