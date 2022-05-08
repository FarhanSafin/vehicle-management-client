import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const AddVehicle = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const url = `https://nameless-anchorage-08422.herokuapp.com/addvehicle`;
        fetch(url, { 
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            alert('Car Added');
            const path = `/myitems`;
            navigate(path);
        })

    };


    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-5'>Please add a service</h2>
            <form className='d-flex flex-column mt-4' onSubmit={handleSubmit(onSubmit)}>
                <label className='text-secondary'><h5>Vehicle's Name</h5></label>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <label className='text-secondary'><h5>Vehicle's Supplier</h5></label>
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <label className='text-secondary'><h5>Vehicle's Image</h5></label>
                <input className='mb-2' placeholder='PhotoURL' type="text" {...register("image")} />
                <label className='text-secondary'><h5>Vehicle's Description</h5></label>
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <label className='text-secondary'><h5>Vehicle's Price</h5></label>
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <label className='text-secondary'><h5>Vehicle's Quantity</h5></label>
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <label className='text-secondary'><h5>Vehicle Sold</h5></label>
                <input className='mb-2' value={0} placeholder='Sold' type="number" {...register("sold")} />
                <label className='text-secondary'><h5>Admin's Email</h5></label>
                <input className='mb-2' value={`${user.email}`} type="text" {...register("email")} />
                <input className='btn btn-success mt-4' type='submit' value="Add Vehicle" />
            </form>
        </div>
    );
};

export default AddVehicle;