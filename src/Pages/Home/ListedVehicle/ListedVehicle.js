import React from 'react';
import { Link } from 'react-router-dom';
import './ListedVehicle.css'

const ListedVehicle = ({vehicle}) => {
    const {name, image, description, price, quantity, supplier} = vehicle
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5 card-align'>
                <div className="card" style={{width: "18rem"}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">Description: {description}</p>
            <p className="card-text">Quantity: {quantity}</p>
            <p className="card-text">Supplier: {supplier}</p>
            <p className="card-text">Price: {price}</p>
            <Link to="/dhfer"><button>Manage</button></Link>
        </div>
        </div>

        </div>

    );
};

export default ListedVehicle;