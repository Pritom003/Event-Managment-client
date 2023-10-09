import React from 'react';
import {AiFillStar} from "react-icons/ai";

const Achivemernt = () => {
  return (
 <div className='  mb-10 p-4'>
  <h1 className='text-2xl grid align-middle justify-center mt-10 items-center mb-10 underline font-semibold'>
    Our avhivements
  </h1>
      <div  className=' grid align-middle grid-cols-2  '>
      <div>
        <img src="https://i.ibb.co/DDztHyG/achivements.png" alt="" />
      </div>
      
      <div className="stats stats-vertical shadow">
  
  <div className="stat">
    <div className="stat-title">Total Events</div>
    <div className="stat-value align-middle flex justify-start items-center">420</div>
    <div className="stat-desc">March,2020-September-2023</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Avarage Rating </div>
    <div className="stat-value flex gap-2 align-middle justify-center items-center gap-2">4.5 <AiFillStar></AiFillStar></div>
    
  </div>
  
  
 
</div>
    </div>
 </div>
  );
};

export default Achivemernt;