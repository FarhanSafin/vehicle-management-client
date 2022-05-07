import React, {  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './MyItems.css'



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
        <div className=''>
            <h2 className='text-center mt-4'>Admin's Email: {user.email}</h2>
            <table className="table table-dark mt-5 container">
            <thead>
    <tr>
      <th className='text-center'>Items</th>
    </tr>
  </thead>
            </table>

            {
                vehicles.map(vehicle => 
                <div key={vehicle._id}>
                <table className="table container">
  <tbody>
    <tr>
      <td className='w-100'>Name: {vehicle.name}</td>
      <td>
      <button className='btn btn-danger' onClick={() => handleDelete(vehicle._id)}>            <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
</svg></button>
      </td>

    </tr>
  </tbody>
</table>
                
                </div>)
            }
            
        </div>
    );
};

export default MyItems;