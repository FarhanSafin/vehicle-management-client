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

    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Blogs', link: '/blogs'},
        {id: 4, name: 'Inventory', link: '/managevehicles'}
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
                    user ? <Button className='btn btn-danger m-3' onClick={handleSignOut}>Sign out</Button> : <></>
                }
            </ul>
        </nav>
    );
};

export default Navbar;