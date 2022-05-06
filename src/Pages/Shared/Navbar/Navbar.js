import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Navigate from '../Navigate/Navigate';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

     const handleSignOut = () => {
         signOut(auth);
         const path = `/`;
         navigate(path);
     }

     const handleMyItems = () => {
         const path = `/myitems`;
         navigate(path);
     }

     const handleAllItems = () => {
         const path = `/managevehicles`;
         navigate(path);
     }

     const handleAddItems = () => {
         const path = `/addvehicle`;
         navigate(path);
     }

    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Blogs', link: '/blogs'},
        {id: 3, name: 'Inventory', link: '/managevehicles'}
    ]

    return (
        <nav>
            <ul className='d-flex'>
                {
                    routes.map(route => <Navigate 
                    key={route.id}
                    route={route}
                    ></Navigate>)
                }
                {
                    user ? <Button className='btn btn-danger m-3' onClick={handleSignOut}>Sign Out</Button> : <></>
                }
                {
                    user ? <Button className='btn btn-danger m-3' onClick={handleMyItems}>My Items</Button> : <></>
                }
                {
                    user ? <Button className='btn btn-danger m-3' onClick={handleAllItems}>Manage All Items</Button> : <></>
                }
                {
                    user ? <Button className='btn btn-danger m-3' onClick={handleAddItems}>Add Item</Button> : <></>
                }
            </ul>
        </nav>
    );
};

export default Navbar;