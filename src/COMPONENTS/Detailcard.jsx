import React from 'react';
import Navbar from './Header/Navbar';
import Footers from './Header/Footers';

const Detailcard = ({selcted}) => {
  const {name,feature1,feature2,feature3,location,expert_name,qualification, feature4,feature5,image ,type,price,description}=selcted
  console.log(feature1)
  
  return (
   <div>
 <div className='grid h-[80vh] justify-center align-middle items-center '>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div  data-aos="flip-left" >
        <img className='h-[40vh]' src={image} alt="" />
        </div>
      <div>
     
       <h1 className='font-extrabold text-4xl text-cyan-600'>{name}</h1>
      <h3 className='font-extrabold text-2xl text-cyan-300'>{type}</h3> 
      <span className='text-2xl font-bold text-cyan-600'> price:{price}</span>      
      <h2 className='text-xl font-bold'>Event location :{location}</h2>
      <p></p>
      </div>
      </div>
      
      
      
    <div className='grid grid-cols-1 md:grid-cols-2'>
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
      <div className='w-1/ flex gap-8 mt-10 justify-center align-middle items-center'>
        <img className='h-[200px]  border-cyan-600'
         src="https://i.ibb.co/wM5xhSZ/instru.webp" alt="" />
        <div>
        <h1 className='text-3xl font-extrabold text-cyan-600 underline'>OUR EXPERT </h1>
        <h4 className='text-xl'> Name:{expert_name}</h4>
         <h3 className='text-xl'> Qualification:{qualification} </h3>
        </div>
        

      </div>
      <div>
      <h3> {}</h3>
          
        </div>
      
    </div>
    </div>
  

   </div>
  );
};

export default Detailcard;