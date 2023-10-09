import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../COMPONENTS/Header/Navbar';

const Roots = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <Navbar></Navbar>
  <Outlet></Outlet>

    </div>
    
  );
};

export default Roots;