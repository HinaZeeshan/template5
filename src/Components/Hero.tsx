import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex items-center bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/shop-hero-1-product-slide-1.jpg')", // Update with your background image path
      }}
    >
      {/* Main container */}
      <div className="w-full h-full flex items-center justify-center">
        {/* Row */}
        <div className="w-full max-w-6xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 md:py-20 lg:py-24">
          {/* Placeholder Divs */}
          <div className="flex flex-col items-start space-y-6 sm:space-y-8 md:space-y-10">
            <h5
              className={`${montserrat.className} font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white hover:text-blue-500`}
            >
              SUMMER 2020
            </h5>
            <h1
              className={`${montserrat.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight hover:text-blue-500`}
            >
              NEW COLLECTION
            </h1>
            <h4
              className={`${montserrat.className} w-full lg:w-[60%] font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-white hover:text-blue-500`}
            >
              We know how large objects will act, but things on a small scale.
            </h4>

            <div className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-myGreen text-white hover:text-blue-500 font-bold py-3 px-6 rounded-lg sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};










// import React from "react";
// import Image from "next/image";
// import women from "/public/images/shop-hero-1-product-slide-1.jpg";

// const Hero = () => {
//   return (
//     <div className="relative w-full h-auto">
//       {/* Hero Image */}
//       <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[880px]">
//         <Image
//           src={women}
//           alt="Summer collection"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="center 70%" // Focus on the subject
//           priority
//           className="absolute inset-0"
//         />
//       </div>

//       {/* Content Overlay */}
//       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 px-4 sm:px-8 lg:px-12 text-white">
//         <h5 className="font-Montserrat font-semibold text-xs sm:text-sm lg:text-base">
//           SUMMER 2020
//         </h5>
//         <h1 className="font-Montserrat font-semibold text-2xl sm:text-3xl lg:text-[58px] leading-tight max-w-full lg:max-w-[600px]">
//           NEW COLLECTION
//         </h1>
//         <h4 className="font-Montserrat font-normal text-sm sm:text-base lg:text-lg max-w-full lg:max-w-[500px]">
//           We know how large objects will act, but things on a small scale.
//         </h4>
//         <button className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-[#2DC071] text-white text-sm sm:text-base lg:text-lg rounded-md font-Montserrat hover:bg-[#25a061] transition duration-300">
//           SHOP NOW
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;



// // import React from "react";
// // import Image from "next/image";
// // import women from "/public/images/shop-hero-1-product-slide-1.jpg"
// // const Hero = () => {
// //   return (
// //     <div className="relative w-full h-auto">
// //     {/* Image for large screens */}
// //     <div className="block relative w-full h-[880px]">
// //       <Image
// //         src={women}
// //         alt="Summer collection"
// //         layout="fill"
// //         objectFit="cover"
// //         objectPosition="80% 70%" // Adjust to focus on the hand of the girl
// //         priority
// //       />
// //     </div>

// //     {/* Content Overlay */}
// //     <div className="absolute inset-0 z-10 flex flex-col justify-center items-center lg:items-start gap-4 px-4 sm:px-8 text-white ">
// //       <h5 className="font-Montserrat font-semibold text-sm sm:text-base lg:text-lg">
// //         SUMMER 2020
// //       </h5>
// //       <h1 className="font-Montserrat font-semibold text-3xl sm:text-4xl lg:text-[58px] leading-tight text-center lg:text-left max-w-full lg:max-w-[600px]">
// //         NEW COLLECTION
// //       </h1>
// //       <h4 className="font-Montserrat font-normal text-base sm:text-lg lg:text-xl text-center lg:text-left max-w-full lg:max-w-[500px]">
// //         We know how large objects will act, but things on a small scale.
// //       </h4>
// //       <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#2DC071] text-white text-sm sm:text-base lg:text-lg rounded-md font-Montserrat hover:bg-[#25a061] transition duration-300">
// //         SHOP NOW
// //       </button>
// //     </div>
// //   </div>




// //   );
// // };

 export default Hero;




