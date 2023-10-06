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