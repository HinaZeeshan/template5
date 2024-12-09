'use client';

import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import  { Montserrat } from 'next/font/google'
 const montseerat = Montserrat({
   subsets: ['latin'],
   weight: '700',
});
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  return (
    <div>
      <header className="text-gray-600 body-font bg-white shadow-md">
        <div className="container mx-auto flex p-3 justify-between items-center px-4 sm:px-6 md:px-8 max-w-7xl">
          {/* Logo Section */}
          <h1 className={`${montseerat.className}sm:text-2xl text-4xl hover:scale-105 transition-transform duration-500 ease-in-out  mt-2 font-bold text-gray-900 mb-4 md:mb-0`}>
          Bandage
          </h1>

          {/* Navigation Links for Desktop */}
          <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-xl justify-center space-x-5 hidden md:flex">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/shop" className="hover:text-gray-900 ">shop</Link>
            <Link href="/about" className="hover:text-gray-900">About</Link>
            <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
            <Link href="/pages" className="hover:text-gray-900">Pages</Link>
          </nav>

         
           

 {/* Breadcrumb */}
       <div className="flex gap-2  text-[#23A6F0]">
       <FaUserCircle size={20}className="flex mt-1 text-[#23A6F0]" /> <Link className="text-[#23A6F0] text-xl" href={'/'}>
      Login
        </Link>
        <p>/</p>
        <Link href={'/contact'} className="text-xl">
          Register
        </Link>
      </div>
 {/* Search Bar, Wishlist Icon, Cart Icon, Account Icon, Hamburger Menu */}
 <div className="flex items-center gap-4 ml-6">

       {/* Search Bar */}
       <div className="relative hidden md:block">
              
              <AiOutlineSearch
                className="text-[#23A6F0] text-xl"
                size={20}
              />
            </div> 

            {/* Wishlist Icon */}
            <Link href="/wishlist" >
              <AiOutlineHeart className="text-[#23A6F0] text-xl   hover:text-gray-900 cursor-pointer" size={24} />
            </Link>

            {/* Cart Icon */}
            <Link href="/cart" >
              <AiOutlineShoppingCart className="text-[#23A6F0] text-xl hover:text-gray-900 cursor-pointer" size={24} />
            </Link>

            
            {/* Hamburger Menu Icon for Mobile */}
            <button
              className="text-gray-600 md:hidden flex items-center"
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

        {/* Mobile Navigation Links */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-center bg-gray-50 p-4 space-y-4">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/shop" className="hover:text-gray-900">shop</Link>
            <Link href="/about" className="hover:text-gray-900">About</Link>
            <Link href="/blog" className="hover:text-gray-900">blog</Link>
            <Link href="/contact" className="hover:text-gray-900">contact</Link>
            <Link href="/pages" className="hover:text-gray-900">pages</Link>
            <button
              className="mt-4 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              Close Menu
            </button>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;












