import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const VehicleDetail = () => {
    const { register, handleSubmit } = useForm();

    const {vehicleId} = useParams();
    const [vehicle, setVehicle] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/vehicle/${vehicleId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setVehicle(data));
    }, []);


    //delivering vehicle
    const updateQuantity = id => {
        const vehicleQuantity = parseInt(vehicle.quantity) - 1;
        const newVehicle = {...vehicle, quantity: vehicleQuantity};
        setVehicle(newVehicle);
        const url = `http://localhost:5000/vehicle/${id}`;
            fetch(url, {
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(newVehicle)
            })
            .then(res => res.json())
            .then(data => {alert('Vehicle Delivered')});
    }

    //adding in stock
    const onSubmit = (id) => {
        let restockAmount = parseInt(document.getElementById("restock-value").value);
        const vehicleQuantity = parseInt(vehicle.quantity) + restockAmount;
        document.getElementById('restock-value').value = '';
        const newVehicle = {...vehicle, quantity: vehicleQuantity};
        setVehicle(newVehicle);
        const url = `http://localhost:5000/vehicle/${id}`
            fetch(url, {
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(newVehicle)
            })
            .then(res => res.json())
            .then(data => {});
    };

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
            <h1>Restock Item</h1>
            <form onSubmit={handleSubmit(() => onSubmit(vehicleId))}>
                <input type="number" id='restock-value' placeholder='Restock Amount' {...register("stock")} />
                <input type="submit" />
            </form>
            <Link to="/managevehicles"><button>Manage Inventories</button></Link>
        </div>
    );
};

export default VehicleDetail;