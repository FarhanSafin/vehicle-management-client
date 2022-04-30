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
        <div>
            <h3>Availabe Vehicles: {vechicles.length}</h3>
            {
                vechicles.map(vehicle => <ListedVehicle
                key={vehicle.id}
                vehicle={vehicle}
                >

                </ListedVehicle>)
            }
        </div>
    );
};

export default ListedVehicles;