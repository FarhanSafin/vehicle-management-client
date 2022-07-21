import { useEffect, useState } from "react";


const useVehicles = () => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(()=>{
        fetch('https://vehicle-manage-t1.herokuapp.com/vehicleList')
        .then(res => res.json())
        .then(data => setVehicles(data));
    }, []);


    return [vehicles, setVehicles];

    }

export default useVehicles;
