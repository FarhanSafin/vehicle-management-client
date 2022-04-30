import React, { useEffect, useState } from 'react';
import ListedVehicle from '../ListedVehicle/ListedVehicle';

const ListedVehicles = () => {

    const [vechicles, setVechicles] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setVechicles(data));
    }, [])


    return (
        <div className='container'>
            <h2 className='text-primary text-center'>Availabe Vehicles: {vechicles.length}</h2>
            <div className="row">
                {
                    vechicles.map(vehicle => <ListedVehicle
                    key={vehicle.id}
                    vehicle={vehicle}
                    >

                    </ListedVehicle>)
                }
            </div>

        </div>
    );
};

export default ListedVehicles;