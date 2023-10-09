import React from 'react';
import Headers from '../COMPONENTS/Header/Headers';
import { useLoaderData } from 'react-router-dom';
import Cards from '../COMPONENTS/Header/Cards';
import Footers from '../COMPONENTS/Header/Footers';
import WhyChooseUs from '../COMPONENTS/aboutus';
import Achivemernt from '../COMPONENTS/Achivemernt';

const Home = () => {

  
  const carddata=useLoaderData();
  console.log( 'hey ',carddata)
  return (
    <div>
      <Headers></Headers>
      <div className=''>
        <WhyChooseUs></WhyChooseUs>
      </div>
<div className='flex justify-center align-middle items-center '>
  
<h2  className=' text-center text-5xl border-b-8 border-cyan-900 w-64 mb-8 ml-5 font-semibold mt-10 text-cyan-700 ita'>
          Our Events
         </h2>
</div>
      <div className='grid grid-cols-1 items-center
       justify-center align-middle md:grid-cols-2 lg:grid-cols-3 gap-2 mb-10 '>


        
      {
        carddata?.map(card=><Cards key={card.id} card={card}></Cards>)
      }
      </div>
      <div>
        <Achivemernt></Achivemernt>
      </div>
  <Footers></Footers>
    </div>
  );
};

export default Home;