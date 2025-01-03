import Image from "next/image"
import girl2 from "/public/images/unsplash_vjMgqUkS8q8.png" 
 {/* groW */}
 const About2 = () => {
     return (
 <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[60px]">
          
  {/* Right Side Blue Section */}
  <div className="w-[1440px] md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16  flex flex-col justify-center">
    <div className="w-[438px] flex flex-col gap-[24px]">
      <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
      <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
      Now Let’s grow Yours
      </h2>
      <p className="text-white lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
      The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
      </p>
      <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
        <span className="text-white text-sm font-bold">Button</span>
      </button>
    </div>
  </div>
  {/* Left Side Image */}
  <div className="w-[540px] md:w-1/2 h-full relative">
    <Image
      src={girl2}
      alt="Testimonial Background"
      className="absolute w-[570px] h-[640px] left-[150px] inset-0 object-cover"
    />
  </div>

</section>



// import Image from 'next/image'
// import React from 'react'

// const About2 = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font bg-[#23A6F0]">
//   <div className="container mx-auto flex px-2 py-14 md:flex-row flex-col justify-center items-center">
//     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <p>ABOUT COMPANY</p>
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ABOUT US
      
//       </h1>
//       <p className="mb-8 leading-relaxed">We know how large objects will act, 
//       but things on a small scale</p>
//       <div className="flex justify-center">
//         <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Quote Now</button>
        
//       </div>
//     </div>
    
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <Image className="object-cover object-center rounded" alt="hero" 
// width={900}
//       height={874}
//       src="/images/unsplash_vjMgqUkS8q8.png"/>
//     </div>
//   </div>
// </section>
//     </div>
   )
 }

export default About2

