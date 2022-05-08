import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    const path = `/`;
    navigate(path);
}
  
    return (
      <>
  <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='home'><img src={logo} height={50} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <CustomLink  as={Link} to='home'>Home</CustomLink>
    
      <CustomLink className="ms-3" as={Link} to='blogs'>
        Blog
      </CustomLink>
    </Nav>
    {
                                user && <>
                                <CustomLink as={Link} to="managevehicles">Manage All Vehicles</CustomLink>
                                <CustomLink className="ms-3" as={Link} to="myitems">My Added Vehicle</CustomLink>
                                <CustomLink className="ms-3" as={Link} to="addvehicle">Add Vehicle</CustomLink>
                                </>
                            }
                            {
                                user ?
                                    <button onClick={handleSignOut} className='btn btn-link text-danger text-decoration-none'>Log Out</button>
                                :
                                <Nav>
                                <CustomLink as={Link} to="login">
                                Login
                            </CustomLink>
                              <CustomLink className="ms-3" as={Link} to="registration">
                                Registration
                            </CustomLink></Nav>
                            }
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
};

export default Header;