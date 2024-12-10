import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative bg-[#01b7dc] w-full h-screen flex items-center justify-center md:h-[600px]">
      <div className="container  mx-auto  flex flex-col md:flex-row items-center justify-center">
        {/* Left Text Section */}
        <div className=" flex  flex-col justify-center items-center md:text-left max-w-lg">
          <p className="text-white uppercase tracking-widest text-xl mb-2">Summer 2020</p>
          <h1 className="text-4xl md:text-[58px] hover:scale-105 transition-transform duration-500 ease-in-out  font-bold text-white mb-4">New Collection</h1>
          <p className="text-white text-base mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white hover:scale-105 transition-transform duration-500 ease-in-out  font-semibold px-6 py-2 rounded-lg">
            Shop Now
          </button>
        </div>
        {/* Right Image Section */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <Image 
       width={1200}
       height={1400}
      alt="feature" className="object-cover object-center h-[600px] w-full" src="/images/shop-hero-1-product-slide-1.jpg"/>
    </div>
        
      </div>
    </div>
  );
};

export default Hero;




