import {  MdCastForEducation } from "react-icons/md";

const Headers = () => {
  return (
    <div className="min-h-[40vh]">
     {/* <div className="hero  h-[400px] w-full"
      style={{backgroundImage: 'url(https://i.ibb.co/FHSBC8B/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg)'}}>
  <div className="hero-overlay bg- bg-white bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <div className="flex items-center justify gap-3">
      <div className=" text-4xl mb-3 text-cyan-500">
        <MdCastForEducation></MdCastForEducation>
        
      </div>
      <div>
      <h1 className="mb-5 text-5xl font-bold  text-cyan-500">KnowledgeJunctionX</h1>
      </div>
      </div>
     
      <p className="mb-5 text-2xl text-slate-800 font-medium font-Lato italic ">At KnowledgeJunctionX, we believe that learning knows no boundaries. Our mission is to provide you 
      with an exceptional platform to explore, expand, and elevate your knowledge and skills.</p>
      <button className="btn bg-cyan-500">Let's lears</button>
    </div>
  </div>
</div>
       */}
       <div className="hero min-h-[20vh] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/wsncTJQ/photo-of-mybg.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <div>
      <div className="flex items-center justify gap-3">
      <div className=" text-4xl mb-3 text-cyan-500">
        <MdCastForEducation></MdCastForEducation>
        
      </div>
      <div>
      <h1 className="mb-5 text-5xl font-bold  text-cyan-500">KnowledgeJunctionX</h1>
      </div>
      </div>
      <p className="mb-5 text-2xl text-slate-800 font-medium font-Lato italic ">At KnowledgeJunctionX, we believe that learning knows no boundaries. Our mission is to provide you 
      with an exceptional platform to explore, expand, and elevate your knowledge and skills.</p>
      </div>
      <button className="btn bg-cyan-500 text-white fontbold">Let's lears</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Headers;