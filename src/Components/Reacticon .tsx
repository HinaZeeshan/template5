import React from 'react'
import { FaLyft } from "react-icons/fa";
import { BiLeaf } from "react-icons/bi";
import { FaStripe } from "react-icons/fa"

import { FaHeadset } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { FaHooli } from "react-icons/fa";
const Reacticon  = () => {
  return (
    <div id="dropShadow"  className='container  border-2 p-6 m-16  mx-auto flex flex-col lg:flex-row justify-between  items-center text-4xl lg:text-8xl'>
    <FaHooli  /> 
    <FaLyft  />
    <BiLeaf  /> 
    <FaStripe  />
    <FaAws  />
    <FaHeadset   />

    </div>
  )
}

export default Reacticon 
