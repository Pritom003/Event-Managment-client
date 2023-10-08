import React, { useContext, useState } from 'react';
import { AuthContext } from '../COMPONENTS/Authfiles/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privaterout = ({children}) => {

  
  const {user,loading}=useContext(AuthContext)
  const location =useLocation()
  if(loading){
    return <h1><span className="loading loading-spinner loading-lg"></span></h1>

  }
  if(user){
    return children
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privaterout;