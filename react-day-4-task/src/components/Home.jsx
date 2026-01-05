import React from "react";
import Button from "./Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const Home = () => {
  return (
   <>
   <div>
     <div className=' text-white border rounded-xl  px-4 py-8 space-y-6 bg-cover mt-3 bg-[url("https://www.juegostudio.com/wp-content/uploads/2024/09/use-of-animation-in-gaming-industry.webp")]'>
      <Button text={"🔥Now Trending"} />

      <div className="flex gap-3 mt-12">
        <Button text={"Drama"} />
        <Button text={"Fantasy"} />
      </div>
      <h1 className="text-5xl font-black">Dimensional Kids  on <br /> an Adventure </h1>
      <p>
        ‘When two curious kids stumble into a hidden portal, they travel <br /> 
        across magical dimensions while trying to find their way home...
      </p>
      <div className="flex gap-2.5 items-center">

        <div>
        <button className="px-3 py-2 flex items-center gap-1.5 bg-blue-400 rounded-xl">
          <h2><FaPlay /></h2> 
          <h2> Watch More</h2>
        </button>

        </div>
        <Button  text={<MdOutlineFileDownload />}/>
        <Button  text={ <IoMdMore />}/>
       
     
      </div>
    </div>
   </div>


   
   </>
  );
};

export default Home;
