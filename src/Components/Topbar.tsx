import React from 'react';
import { FiYoutube } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import  { Montserrat } from 'next/font/google'
 const montseerat = Montserrat({
   subsets: ['latin'],
   weight: '700',
});

const TopBar = () => {
  return (
    <div className="bg-[#252B42] text-white text-sm py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
        <FaPhoneAlt className='text-base' /><span>(225) 555-0118</span>
          <span className="hidden sm:inline">|</span>
          <MdOutlineMailOutline className='text-xl'/> <span className={`${montseerat.className} `}>  michelle.rivera9@example.com</span>
        </div>
        {/* Middle Section */}
        <div className={`mt-2 sm:mt-0 ${montseerat.className} `}>
          Follow us and get a chance to win 80% off
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-3 mt-2 sm:mt-0">
          <span>Follow Us :</span>
          <a href="#" className="hover:text-blue-300">
          <IoLogoInstagram className='text-xl'/>
          </a>
          <a href="#" className="hover:text-blue-300">
          <FiYoutube className='text-xl' />
          </a>
          <a href="#" className="hover:text-blue-300">
          <CiFacebook className='text-xl' />
          </a>
          <a href="#" className="hover:text-blue-300">
          <FiTwitter className='text-xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
