import React from 'react';
import Headers from '../COMPONENTS/Header/Headers';
import { useLoaderData } from 'react-router-dom';
import Cards from '../COMPONENTS/Header/Cards';
import Footers from '../COMPONENTS/Header/Footers';

const Home = () => {

  
  const carddata=useLoaderData();
  console.log( 'hey ',carddata)
  return (
    <div>
      <Headers></Headers>
<div className='flex justify-center align-middle items-center '>
  
<h2  className=' text-center text-5xl border-b-8 border-cyan-900 w-64 mb-8 ml-5 font-semibold mt-10 text-cyan-700 ita'>
          Our Events
         </h2>
</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>


        
      {
        carddata?.map(card=><Cards key={card.id} card={card}></Cards>)
      }
      </div>
  <Footers></Footers>
    </div>
  );
};

export default Home;