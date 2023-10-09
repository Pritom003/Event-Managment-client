import React from 'react';
import {      GrFacebook , } from "react-icons/gr";
import {   AiOutlineMail } from "react-icons/ai";
import {    GrInstagram } from "react-icons/gr";
import {    FaTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
  <div className='flex  justify-center align-middle gap-10 items-center mt-20'>
    <div>
      <img src="https://i.ibb.co/3fm3MhH/findus.png" alt="" />
    </div>
      <div className=' grid justify-center align-middle items-center'>
      <h1 className='grid justify-center align-middle items-center  text-2xl font-bold text-cyan-700'>Contact Us</h1>
      <p className='text-xs grid justify-center ali'>If you have any questions or inquiries, feel free to <br />
       reach out to us through the following channels:</p>

      <div className="contact-info">
        
        <div className="contact-item flex items-center p-4 align-middle justify-start gap-2">
      
          <span className='font-bold'>Email:</span>
          <AiOutlineMail></AiOutlineMail>
         
          <a href="Knowledgejunk99@email.com">Knowledgejunk99@email.com</a>
        </div>

        <div className="contact-item flex items-center p-4 align-middle justify-start gap-2">
          <span  className='font-bold'>Instagram:</span>
       <GrInstagram></GrInstagram>
          <a href="https://www.instagram.com/your_instagram_account/">@knowledge_junction_X_</a>
        </div>
                
        <div className="contact-item flex items-center p-4 align-middle justify-start gap-2">
          <span  className='font-bold'>Facebook:</span>
          <GrFacebook></GrFacebook>
          <a href="https://www.facebook.com/your_facebook_page/">KnowledgeJuction</a>
        </div>

        <div className="contact-item flex items-center p-4 align-middle justify-start gap-2">
          <span  className='font-bold'>Twitter:</span>
          <FaTwitter></FaTwitter>
          <a href="https://twitter.com/your_twitter_account/">@knowledge_junction_X</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
