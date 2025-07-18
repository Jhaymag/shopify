import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Product from './pages/product/product';
import About from './pages/shopInfomation/about';
import Contact from './pages/shopInfomation/contact';
import Error_404 from './pages/errorHandler/404';
import Maintenance from './pages/errorHandler/maintenance';
import Admin from './pages/admin/admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/*' element={<Error_404 />} />
        <Route path='/maintenance' element={<Maintenance />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}
