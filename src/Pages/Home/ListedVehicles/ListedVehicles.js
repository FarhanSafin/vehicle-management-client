import useVehicles from '../../../hooks/useVehicles';
import ListedVehicle from '../ListedVehicle/ListedVehicle';

const ListedVehicles = () => {

const [vechicles] = useVehicles();


    return (
        <div className='container'>
            <h2 className='text-primary text-center'>Availabe Vehicles: {vechicles.length}</h2>
            <div className="row">
                {
                    vechicles.map(vehicle => <ListedVehicle
                    key={vehicle.id}
                    vehicle={vehicle}
                    >
                    </ListedVehicle>)
                }
            </div>

        </div>
    );
};

export default ListedVehicles;