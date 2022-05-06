import React, {  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';



const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const [vehicles, setVehicles] = useState([]);

    if(loading)
    {
        return <Loading></Loading>
    }else{
        const url = `http://localhost:5000/myItems?email=${user.email}`;
            fetch(url, {
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {setVehicles(data)});

    }

    const handleDelete = id => {
        const proceed = window.confirm ('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/vehicle/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                const remaining = vehicles.filter(vehicle => vehicle._id !== id);
                setVehicles(remaining);
            })
        }
    }

    return (
        <div>
            <h2>Name: {user.email}</h2>
            {
                vehicles.map(vehicle => 
                <div key={vehicle._id}>
                    <h4>{vehicle.name}</h4>
                    <button onClick={() => handleDelete(vehicle._id)}>X</button>
                </div>)
            }
            
        </div>
    );
};

export default MyItems;