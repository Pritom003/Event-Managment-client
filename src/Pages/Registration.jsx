import React, { useContext } from 'react';
import { AuthContext } from '../COMPONENTS/Authfiles/AuthProvider';

const Registration = () => {
const {createUser}=useContext(AuthContext)


  const handleregister=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    const name=e.target.name.value
    console.log(email,password,name)
    createUser(email,password)
    .then(res=>{
      console.log(res.user)
    })
    .catch(err=>{ 
      console.error('errror',err)
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      <div className="text-center ">
        <h1 className="text-5xl text-cyan-700 font-bold">Register now!</h1>
       
      </div>
      <div className="card flex-shrink-0 w-[50vw] md:w-[40vw] shadow-2xl bg-base-100">
        <form onSubmit={handleregister} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name"  name='name' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="Photo" placeholder="photo"  name='photo' className="input input-bordered" required />
          </div>
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
            <button className="btn bg-cyan-950 font-bold text-white">register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Registration;