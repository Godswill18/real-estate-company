import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import About from './pages/About/About';
import PropertyType from './pages/Prop type/PropertyType';
import PropertyList from './pages/Prop List/PropertyList';
import PropertyAgent from './pages/Porp Agent/PropertyAgent';
import Error from './pages/404 page/Error';
import Testimonial from './pages/testimonial/Testimonial';
import Contact from './pages/contact/Contact';
import Apartment from './pages/Prop type/Apartment';
import Villa from './pages/Prop type/Villa';
import HomeProp from './pages/Prop type/HomeProp';
import Office from './pages/Prop type/Office';
import Hall from './pages/Prop type/Hall';
import TownHouse from './pages/Prop type/TownHouse';
import Shop from './pages/Prop type/Shop';
import Ap1 from './pages/product page/Ap1';
import AdminNav from './components/Admin Nav/AdminNav';
import Dashboard from './components/Admin Nav/admin dashboard/Dashboard';
import HomeDashboard from './components/Admin Nav/admin dashboard/HomeDashboard';
import AdminCategory from './components/Admin Nav/categories/AdminCategory';
import DashAbout from './components/Admin Nav/admin dashboard/DashAbout';
import AddProperty from './pages/Admin/AddProperty';
import SignIn from './pages/Admin/SignIn';
import Register from './components/Admin Nav/admin register/Register';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import Login from './components/Admin Nav/admin Login/Login';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="propertyType" element={<PropertyType />} />
          <Route path="propertyList" element={<PropertyList />} />
          <Route path="propertyAgent" element={<PropertyAgent />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />
          <Route path="apartment" element={<Apartment />} />
          <Route path="vila" element={<Villa />} />
          <Route path="homeProperties" element={<HomeProp />} />
          <Route path="office" element={<Office />} />
          <Route path="hall" element={<Hall />} />
          <Route path="townHouse" element={<TownHouse />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<Ap1 />} />
        </Route>

        <Route path="admin" element={user ? <AdminNav /> : <SignIn/>}>
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route index element={<Dashboard />} />
          <Route path="categories" element={<AdminCategory />} />
          <Route path="homeDashBoard" element={<HomeDashboard />} />
          <Route path="aboutDashboard" element={<DashAbout />} />
          <Route path="addProperty" element={<AddProperty />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
