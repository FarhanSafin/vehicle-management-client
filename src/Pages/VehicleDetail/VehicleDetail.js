import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './VehicleDetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VehicleDetail = () => {
    const { register, handleSubmit } = useForm();

    const {vehicleId} = useParams();
    const [vehicle, setVehicle] = useState({});

    useEffect(() => {
        const url = `https://vehicle-manage-t1.herokuapp.com/vehicle/${vehicleId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setVehicle(data));
    }, []);


    //delivering vehicle
    const updateQuantity = id => {
        const vehicleQuantity = parseInt(vehicle.quantity);
        const soldQuantity = parseInt(vehicle.sold);
        if(vehicleQuantity === 0){
            return toast('Stock Out')
        }else{
            const newQuantity = vehicleQuantity - 1;
            const newSold = soldQuantity + 1;
            const newVehicle = {...vehicle, quantity: newQuantity, sold: newSold};
            setVehicle(newVehicle);
            const url = `https://vehicle-manage-t1.herokuapp.com/vehicle/${id}`;
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
    }

    //adding in stock
    const onSubmit = (id) => {
        let restockAmount = parseInt(document.getElementById("restock-value").value);
        const vehicleQuantity = parseInt(vehicle.quantity) + restockAmount;
        document.getElementById('restock-value').value = '';
        const newVehicle = {...vehicle, quantity: vehicleQuantity};
        setVehicle(newVehicle);
        const url = `https://vehicle-manage-t1.herokuapp.com/vehicle/${id}`
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
        <div className='container'>
            <img className='img' src={vehicle.image} alt="" />
            <div className='text-center mt-4'>
            <h2>Vehicle's Name: {vehicle.name}</h2>
            <h3>Description: {vehicle.description}</h3>
            <h3>Price: {vehicle.price}</h3>
            <h3>Quantity: {vehicle.quantity}</h3>
            <h3>Sold: {vehicle.sold}</h3>
            <h3>Supplier: {vehicle.supplier}</h3>
            <h3>Admin's Email: {vehicle?.email}</h3>
            <button className='btn btn-success' onClick={() => updateQuantity(vehicleId)}>Delivered: {vehicle.name}</button>
            </div>
            <h1 className='mt-3 text-center'>Restock Item</h1>
            <form className='text-center' onSubmit={handleSubmit(() => onSubmit(vehicleId))}>
                <input className='p-2' type="number" id='restock-value' placeholder='Restock Amount' {...register("stock")} />
                <input className='btn btn-warning ms-3' type="submit" />
            </form>
            <Link className='button-design' to="/managevehicles"><button className='mt-5 btn btn-secondary'>Manage All Vehicles</button></Link>
            <ToastContainer />
        </div>
    );
};

export default VehicleDetail;