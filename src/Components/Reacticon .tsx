import React from 'react';
import { FaLyft } from 'react-icons/fa';
import { BiLeaf } from 'react-icons/bi';
import { FaStripe } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa6';
import { FaAws } from 'react-icons/fa6';
import { FaHooli } from 'react-icons/fa';

const Reacticon = () => {
  return (
    <div id="dropShadow" className="h-auto border-2 w-full p-2 bg-[#FAFAFA]">
      <div
        className="flex flex-wrap justify-between max-w-7xl gap-4 sm:gap-8 lg:gap-12 items-center 
                   mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
      >
        <FaHooli />
        <FaLyft />
        <BiLeaf />
        <FaStripe />
        <FaAws />
        <FaHeadset />
      </div>
    </div>
  );
};

export default Reacticon;



// import React from 'react'
// import { FaLyft } from "react-icons/fa";
// import { BiLeaf } from "react-icons/bi";
// import { FaStripe } from "react-icons/fa"

// import { FaHeadset } from "react-icons/fa6";
// import { FaAws } from "react-icons/fa6";
// import { FaHooli } from "react-icons/fa";
// const Reacticon  = () => {
//   return (
//     <div id="dropShadow"  className='h-auto border-2 w-full'>
//     <div className='flex flex-col md:flex-row  justify-between  items-center mx-2 sm:mx-4 md:mx-6  lg:mx-auto text-4xl lg:text-8xl' >
//     <FaHooli  /> 
//     <FaLyft  />
//     <BiLeaf  /> 
//     <FaStripe  />
//     <FaAws  />
//     <FaHeadset   />
//     </div>
//     </div>
//   )
// }

// export default Reacticon 
