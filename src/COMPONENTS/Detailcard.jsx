import React from 'react';

const Detailcard = ({selcted}) => {
  const {name,feature1,feature2,feature3,feature4,feature5,image ,type,price,description}=selcted
  console.log(feature1)
  
  return (
    <div className='grid h-[80vh] justify-center align-middle items-center '>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div  data-aos="flip-left" >
        <img className='h-[40vh]' src={image} alt="" />
        </div>
      <div>
     
       <h1 className='font-extrabold text-4xl text-cyan-600'>{name}</h1>
      <h3 className='font-extrabold text-2xl text-cyan-300'>{type}</h3> 
      <span className='text-2xl font-bold text-cyan-600'> price:{price}</span>      
      
      </div>
      </div>
      
      
      
      <div>
        <h4 className='text-2xl font-bold border-b-8 w-96 mt-16 border-cyan-700'> The Features of {name}</h4>

      <ul className='list-decimal m-4 text-xl font-bold '>
        <li>
          {feature1}
        </li>
        <li>
          {feature2}
        </li>
        <li>
          {feature3}
        </li>
        <li>
          {feature4}
        </li>
        <li>
          {feature5}
        </li>
      </ul>

      </div>
      
    </div>
  );
};

export default Detailcard;