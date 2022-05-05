import React from 'react';
import { useParams } from 'react-router-dom';

const VechileDetail = () => {
    const {vehicleId} = useParams();

    return (
        <div>
            <h2>Detail: {vehicleId}</h2>
        </div>
    );
};

export default VechileDetail;