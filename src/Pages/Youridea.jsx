import React, { useState, useEffect } from 'react';

const TextEntryPage = () => {

  const [userInput, setUserInput] = useState('');


  const [entries, setEntries] = useState([]);

  
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    setEntries([...entries, userInput]);

    setUserInput('');
  }
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('entries'));
    if (storedEntries) {
      setEntries(storedEntries);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  return (
   <div className='flex justify-center align-middle  gap-10'>
   <div>
   <img className='h-[120px] mt-20' src=" https://i.ibb.co/XtTZQBw/commenss.jpg" alt="" />
      <div className=' '>
     <p className='text-2sl font-bold grid justify-center align-middle items-center'>Rate us</p>
     <div className="rating flex justify-center">
   <input type="radio" name="rating-1" className="mask mask-star" />
   <input type="radio" name="rating-1" className="mask mask-star" checked />
   <input type="radio" name="rating-1" className="mask mask-star" />
   <input type="radio" name="rating-1" className="mask mask-star" />
   <input type="radio" name="rating-1" className="mask mask-star" />
 </div>
   </div>
   </div>
    <div>

<div className=' grid  justify-center align-middle items-center '>
      <h1 className='text-xl font-bold underline mb-4'>Your Review: </h1>

      {/* Input form */}
      <form onSubmit={handleSubmit}>
       <div>
       <input className='h-[120px] border-2 mb-4 border-cyan-900'
          type="text"
          placeholder="Enter text"
          value={userInput}
          onChange={handleInputChange}
        />
       </div>
        <button className='btn bg-cyan-950 text-white ' type="submit">Submit</button>
      </form>

      {/* Display submitted entries */}
      <div className='border-t-2 border-cyan-800 border-b-2 mt-4 mb-4'>
        <h2 className='font-bold text-lg underline '> Your comments</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
     
    </div>
   

   </div>
   </div>
  );
}

export default TextEntryPage;
