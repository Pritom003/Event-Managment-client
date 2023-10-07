
import { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import Detailcard from '../COMPONENTS/Detailcard';

const Details = () => {

  const data=useLoaderData(null)
  console.log('1',data)
  const {id}=useParams();
  const [selcted,setselected]=useState({})
  useEffect(()=>{

    const findcard=data.find((card)=>card.id==id)
    setselected(findcard)

  },[data,id])
  console.log('2',data)
  

  return (
    <div className=' max-w-6xl mx-auto p-10 grid justify-center items-center align-middle p-6'>
      
      <Detailcard selcted={selcted}></Detailcard>
      
    </div>
  );
};

export default Details;
