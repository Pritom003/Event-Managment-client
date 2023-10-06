import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {
  const {name, type , image,price,description,button_text}=card
  return (
    <div>
      
      
<div className='p-4  h-[500px]'>
<div className="card w-96 bg-base-100 shadow-xl  image-full">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl font-extrabold text-cyan-400 ">{name}</h2>
    <h3 className='text-lg border-dotted
     border-cyan-300 bg-cyan-200 w-36 text-center
      text-cyan-700 font-bold'>{type}</h3>
    <span className='text-cyan-300 
    font-bold'> {price}</span>
    <p className='font-bold text-2xl'>{description}</p>
    
    <div className="card-actions justify-center">
  
    

<Link to='/details'><button className="btn bg-cyan-900 text-white fontbold"> view details  </button></Link>

   
    </div>
  </div>
</div>
</div>



    </div>
  );
};

export default Cards;