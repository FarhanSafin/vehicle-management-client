import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddVehicle = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const url = `http://localhost:5000/addvehicle`;
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
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='PhotoURL' type="text" {...register("image")} />
                <textarea className='mb-2' placeholder='Des' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' value={`${user.email}`} type="text" {...register("email")} />
                <input type='submit' value="Add Vehicle" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddVehicle;