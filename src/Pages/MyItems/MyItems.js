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
            fetch(url)
            .then(res => res.json())
            .then(data => {setVehicles(data)});
    }

    return (
        <div>
            <h2>Name: {user.email}</h2>
            {
                vehicles.map(vehicle => 
                <div key={vehicle._id}>
                    <h4>{vehicle.name}</h4>
                </div>)
            }
        </div>
    );
};

export default MyItems;