import React, { useContext, useState } from 'react';
import { AuthContext } from '../COMPONENTS/Authfiles/AuthProvider';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Registration = () => {
  const { createUser, googleSignin } = useContext(AuthContext);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passerr, setpasserr] = useState('');
  const [registererror, setregierror] = useState('');

  const handlegogglepop = () => {
    googleSignin()
      .then((res) => {
        console.log('user', res.user);
      })
      .catch((error) => {
        console.log('err', error.message);
      });
  };

  const handleregister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    // Password validation
    if (!/^.{6,}$/.test(password)) {
      setpasserr('Password should be more than 6 characters');
    } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).*$/.test(password)) {
      setpasserr('Password should contain at least one capital letter and one special character');
    } else {
      setpasserr(''); // Clear password error message if password is valid
      setpassword(password);
      setemail(email);

      createUser(email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => {
          console.error('error', err);
          setregierror(err.message);
        });
    }
  };

  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200 flex justify-center gap-6 items-center align-middle ">
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
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="Photo" placeholder="photo" name="photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                {passerr && <p className="text-red-600">{passerr}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-950 font-bold text-white">register</button>
              </div>
              <p> Already have an account?
                <Link className="underline-offset-8 ml-4 text-cyan-600 font-bold" to="/login">
                  Login
                </Link>
              </p>
            </form>
            <div>{registererror}</div>
          </div>
        </div>
        <div className="">
          <button
            onClick={handlegogglepop}
            className="flex shadow-2xl items-center justify-center py-24 px-10 border-cyan-800 border-4 align-middle gap-2 text-xl font-bold"
          >
            Sign in with Google
            <FcGoogle className="text-6xl"></FcGoogle>
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Registration;