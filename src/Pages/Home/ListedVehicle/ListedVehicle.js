import React from 'react';
import './ListedVehicle.css'

const ListedVehicle = ({vehicle}) => {
    const {name, image, description, price, quantity, sold} = vehicle
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5 card-align'>
                <div className="card" style={{width: "18rem"}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Update</a>
        </div>
        </div>

        </div>

    );
};

export default ListedVehicle;