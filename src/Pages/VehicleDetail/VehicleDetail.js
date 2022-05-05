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
    }, []);



    const updateQuantity = id => {
        const vehicleQuantity = parseInt(vehicle.quantity) - 1;
        console.log(vehicleQuantity);
        const url = `http://localhost:5000/vehicle/${id}`;
            fetch(url, {
                method:'PATCH'
            })
            .then(res => res.json())
            .then(data => {console.log(data)});
    }

    return (
        <div>
            <img src={vehicle.image} alt=""/>
            <h2>ID: {vehicleId}</h2>
            <h2>Vehicle: {vehicle.name}</h2>
            <h2>Desc: {vehicle.description}</h2>
            <h2>Price: {vehicle.price}</h2>
            <h2>Quantity: {vehicle.quantity}</h2>
            <h2>Supplier: {vehicle.supplier}</h2>
            <h2>Sold: {vehicle.sold}</h2>
            <button onClick={() => updateQuantity(vehicleId)}>Delivered: {vehicle.name}</button>
        </div>
    );
};

export default VehicleDetail;