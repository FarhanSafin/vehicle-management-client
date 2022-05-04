import { useEffect, useState } from "react";


const useVehicles = () => {

    const [vechicles, setVechicles] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setVechicles(data));
    }, []);


    return [vechicles, setVechicles];

    }

export default useVehicles;
