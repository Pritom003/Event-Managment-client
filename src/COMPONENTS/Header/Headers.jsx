import {  MdCastForEducation } from "react-icons/md";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className=" grid grid-cols-1 md:flex md:flex-row-reverse p-4 shadow-md  justify-center md:justify-between align-middle items-center ">
       <div className="grid justify-center align-middle items-center mb-6 ">
      <img src="https://i.ibb.co/PgL8ghw/sssaave.png" className="max-w-sm rounded-lg shadow-2xl" />
      </div>
        <div className="  mb-3 text-cyan-500">
      <div className="flex gap-2  items-center">
     <div className="text-2xl md:text-3xl lg:text-4xl ">
     <MdCastForEducation ></MdCastForEducation>
     </div>
        <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold  text-cyan-500">KnowledgeJunctionX</h1>
      </div>
        <p className="mb-5 text-lg lg:text-xl text-slate-800 font-medium font-Lato italic p-6 lg:p-4">Educational event management simplified           one-stop 
        solution for your in-person, hybrid, and virtual events. Simplify your event planning today!</p>
    
      <Link to='/regi'><button className="btn bg-cyan-900 text-white fontbold">Join us</button></Link> </div>
    
    
     </div>
  );
};

export default Headers;