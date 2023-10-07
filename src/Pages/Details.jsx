
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
    <div>
      <p>The details</p>
      {id}
      <Detailcard selcted={selcted}></Detailcard>
      
    </div>
  );
};

export default Details;
