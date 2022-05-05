import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VehicleDetail = () => {
    const {vehicleId} = useParams();
    const [vehicle, setVehicle] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/vehicle/${vehicleId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setVehicle(data));
    }, [])
    return (
        <div>
            
            <img src={vehicle.image} alt="" srcset="" />
            <h2>ID: {vehicleId}</h2>
            <h2>Vehicle: {vehicle.name}</h2>
            <h2>Desc: {vehicle.description}</h2>
            <h2>Price: {vehicle.price}</h2>
            <h2>Quantity: {vehicle.quantity}</h2>
            <h2>Supplier: {vehicle.supplier}</h2>
            <h2>Sold: {vehicle.sold}</h2>
        </div>
    );
};

export default VehicleDetail;