import useVehicles from '../../../hooks/useVehicles';
import ListedVehicle from '../ListedVehicle/ListedVehicle';

const ListedVehicles = () => {

const [vehicles] = useVehicles();

    return (
        <div className='container'>
            <h2 className='text-primary text-center'>Availabe Vehicles: {vehicles.length}</h2>
            <div className="row">
                {
                    vehicles.map(vehicle => <ListedVehicle
                    key={vehicle._id}
                    vehicle={vehicle}
                    >
                    </ListedVehicle>)
                }
                
            </div>
        </div>
    );
};

export default ListedVehicles;