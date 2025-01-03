'use client';

import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-gray-600 bg-white shadow-md">
      <div className="max-w-7xl flex items-center justify-between px-2 py-3 sm:px-6 lg:px-12 mx-2 sm:mx-4 md:mx-6 lg:mx-auto ">
        {/* Logo */}
        <h1
          className={`${montserrat.className} text-xl sm:text-2xl font-bold text-gray-900`}
        >
          Bandage
        </h1>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/shop" className="hover:text-gray-900">Shop</Link>
          <Link href="/about" className="hover:text-gray-900">About</Link>
          <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
          <Link href="/team" className="hover:text-gray-900">team</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
          <Link href="/pages" className="hover:text-gray-900">Pages</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center mr-32 space-x-0 sm:space-x-4">
          {/* Login/Register */} 
          <div className="flex items-center sm:gap-2 text-[#23A6F0]">
            <FaUserCircle size={18} className="text-[#23A6F0]" />
            <Link href="/" className="text-sm sm:text-base">Login</Link>
            <span>/</span>
            <Link href="/register" className="text-sm sm:text-base">Register</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <AiOutlineSearch size={20} className="hidden md:block text-[#23A6F0] cursor-pointer" />
            <Link href="/wishlist">
              <AiOutlineHeart className="text-[#23A6F0] cursor-pointer" size={24} />
            </Link>
            <Link href="/cart">
              <AiOutlineShoppingCart className="text-[#23A6F0] cursor-pointer" size={24} />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            className="text-gray-600 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 border-t border-gray-200 p-4 space-y-4">
          <Link href="/" className="block hover:text-gray-900">Home</Link>
          <Link href="/shop" className="block hover:text-gray-900">Shop</Link>
          <Link href="/about" className="block hover:text-gray-900">About</Link>
          <Link href="/pricing" className="block hover:text-gray-900">Pricing</Link>
          <Link href="/contact" className="block hover:text-gray-900">Contact</Link>
          <Link href="/pages" className="block hover:text-gray-900">Pages</Link>
          <button
            className="w-full text-gray-600 text-center border border-gray-300 rounded-md py-2"
            onClick={() => setMenuOpen(false)}
          >
            Close Menu
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;






// 'use client';

// import React, { useState } from "react";
// import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import { FaUserCircle } from "react-icons/fa";
// import Link from "next/link";
// import  { Montserrat } from 'next/font/google'
//  const montseerat = Montserrat({
//    subsets: ['latin'],
//    weight: '700',
// });
// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
 

//   return (
//     <div>
//       <header className="text-gray-600 body-font  bg-white shadow-md">
//         <div className="  bg-slate-300 flex p-3 justify-between items-center px-2 sm:px-4 md:px-8 max-w-7xl mx-2 md:mx-4 lg:mx-auto ">
//           {/* Logo Section */}
//           <h1 className={`${montseerat.className}sm:text-2xl text-3xl hover:scale-105 transition-transform duration-500 ease-in-out  mt-2 font-bold text-gray-900 mb-4 md:mb-0`}>
//           Bandage
//           </h1>

//           {/* Navigation Links for Desktop */}
//           <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-sm md:text-base justify-center space-x-5 hidden md:flex">
//             <Link href="/" className="hover:text-gray-900">Home</Link>
//             <Link href="/shop" className="hover:text-gray-900 ">shop</Link>
//             <Link href="/about" className="hover:text-gray-900">About</Link>
//             <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
//             <Link href="/contact" className="hover:text-gray-900">Contact</Link>
//             <Link href="/pages" className="hover:text-gray-900">Pages</Link>
//           </nav>

         
           

//  {/* Breadcrumb */}
//        <div className="flex gap-2  text-[#23A6F0] bg-slate-400">
//        <FaUserCircle size={18}className="flex mt-1 text-[#23A6F0]" /> <Link href={'/'} className="text-[#23A6F0] text-base ">
//       Login
//         </Link>
//         <p>/</p>
//         <Link href={'/contact'}>
//           Register
//         </Link>
//       </div>
//  {/* Search Bar, Wishlist Icon, Cart Icon, Account Icon, Hamburger Menu */}
//  <div className=" flex items-center gap-4 ml-6 mr-12 bg-slate-500 ">

//        {/* Search Bar */}
//        <div className="relative hidden md:block">
              
//               <AiOutlineSearch
//                 className="text-[#23A6F0] "
//                 size={20}
//               />
//             </div> 

//             {/* Wishlist Icon */}
//             <Link href="/wishlist" >
//               <AiOutlineHeart className="text-[#23A6F0]   hover:text-gray-900 cursor-pointer" size={24} />
//             </Link>

//             {/* Cart Icon */}
//             <Link href="/cart" >
//               <AiOutlineShoppingCart className="text-[#23A6F0]  hover:text-gray-900 cursor-pointer" size={24} />
//             </Link>

            
//             {/* Hamburger Menu Icon for Mobile */}
//             <button
//               className="text-gray-600 md:hidden flex items-center"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Links */}
//         {menuOpen && (
//           <nav className="md:hidden flex flex-col items-center bg-gray-50 p-4 space-y-4">
//             <Link href="/" className="hover:text-gray-900">Home</Link>
//             <Link href="/shop" className="hover:text-gray-900">shop</Link>
//             <Link href="/about" className="hover:text-gray-900">About</Link>
//             <Link href="/blog" className="hover:text-gray-900">blog</Link>
//             <Link href="/contact" className="hover:text-gray-900">contact</Link>
//             <Link href="/pages" className="hover:text-gray-900">pages</Link>
//             <button
//               className="mt-4 text-gray-600"
//               onClick={() => setMenuOpen(false)}
//             >
//               Close Menu
//             </button>
//           </nav>
//         )}
//       </header>
//     </div>
//   );
// };

// export default Header;












