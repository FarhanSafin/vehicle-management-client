import React from 'react';

const ListedVehicle = ({vehicle}) => {
    const {name, image, description, price, quantity, sold} = vehicle
    return (
        <div>
            <img src={image} alt="" />
            <h2>This is vehicle : {name}</h2>
        </div>
    );
};

export default ListedVehicle;