import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useVehicles from '../../hooks/useVehicles';

const ManageVehicles = () => {
    const [vehicles,setVehicles] = useVehicles();


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

    const navigate = useNavigate();

    const showVehicleDetail = id => {
        const path = `/vehicle/${id}`;
        navigate(path);
    }

    
    return (
        <div>
            <h2>Manage your all cars</h2>
            {
                vehicles.map(vehicle => <div key={vehicle._id}>
                    <img src={vehicle.image} alt="" className='w-25' />
                    <h4>{vehicle.name}<button onClick={() => handleDelete(vehicle._id)}>X</button>
                    <button onClick={() => showVehicleDetail(vehicle._id)}>Manage</button>
                    </h4>
                </div>)
            }
            <Link to="/addvehicle"><button>Add new Vehicle</button></Link>
        </div>
    );
};

export default ManageVehicles;