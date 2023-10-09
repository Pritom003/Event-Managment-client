import React, { useContext, useState } from 'react';
import { AuthContext } from '../COMPONENTS/Authfiles/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import {FcGoogle } from "react-icons/fc";
import Swal  from 'sweetalert2';
const Login = () => {
  const { Singnin}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  // const [loginrerror, setlogrror] = useState('');
 


  const handlelogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    console.log(email,password)
    
    Singnin(email,password)
    .then(result=>{
      console.log(result.user);
      navigate( location?.state? location.state :'/')


    })
    .catch(error=>{
      console.error(error)
      // setlogrror(error.message)
      Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

    })
  }







  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center gap-6 items-center align-middle ">
    <div className="hero-content flex-col ">
      <div className="text-center ">
        <h1 className="text-5xl text-cyan-700 font-bold">Login now!</h1>
       
      </div>
      <div className="card flex-shrink-0 w-[50vw] md:w-[40vw] shadow-2xl bg-base-100">
        <form onSubmit={handlelogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email"  name='email' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-cyan-950 font-bold text-white">Login</button>
          </div>
          <p> New here ? <Link className='underline-offset-8  text-cyan-600 font-bold' to='/regi'>
        Register 
        
        </Link></p>
        </form>
      
      </div>
    </div>
   
  </div>
  );
};

export default Login;