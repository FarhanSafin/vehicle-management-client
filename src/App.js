import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login'
import Registration from './Pages/Registration/Registration';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import VehicleDetail from './Pages/VehicleDetail/VehicleDetail';
import ManageVehicles from './Pages/ManageVehicles/ManageVehicles';
import AddVehicle from './Pages/AddVehicle/AddVehicle';
import MyItems from './Pages/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/vehicle/:vehicleId' element={
        <RequireAuth>
          <VehicleDetail></VehicleDetail>
        </RequireAuth>
        }>
        </Route>
        <Route path='/myitems' element={
        <RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>
        }>
        </Route>
        <Route path='/addvehicle' element={
        <RequireAuth>
          <AddVehicle></AddVehicle>
        </RequireAuth>
        }>
        </Route>
        <Route path='/managevehicles' element={
        <RequireAuth>
          <ManageVehicles></ManageVehicles>
        </RequireAuth>
        }>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
