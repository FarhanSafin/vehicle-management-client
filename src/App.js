import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login'
import Registration from './Pages/Registration/Registration';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ListedVehicles from './Pages/Home/ListedVehicles/ListedVehicles';
import Blogs from './Pages/Blogs/Blogs';
import VechileDetail from './Pages/VehicleDetail/VechileDetail';

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
        <Route path='/manageitems' element={<ListedVehicles></ListedVehicles>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/vehicle/:vehicleId' element={
        <RequireAuth>
          <VechileDetail></VechileDetail>
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
