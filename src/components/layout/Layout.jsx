import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
