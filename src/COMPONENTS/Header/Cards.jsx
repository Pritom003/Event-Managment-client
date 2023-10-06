import React from 'react';

const Cards = ({card}) => {
  const {name, type , image,price,description,button_text}=card
  return (
    <div>
      
      {/* <div classNameName="card lg:card-side bg-base-100 h-96 shadow-xl">
  <figure><img classNameName='w-72' src={image} alt="Album"/></figure>
  <div classNameName="card-body">
    <h1 classNameName='text-4xl'> {name}</h1>
    <h2 classNameName="card-title">{type}</h2>
    <p>{description}</p>
    <span classNameName='text-2xl'> ${price}</span>
    <div classNameName="card-actions justify-end">
      <button classNameName="btn bg-cyan-800 text-white">{button_text}</button>
    </div>
  </div>
</div> */}

<div className='p-4'>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3 className='text-lg'>{type}</h3>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">view details</button>
    </div>
  </div>
</div>
</div>



    </div>
  );
};

export default Cards;