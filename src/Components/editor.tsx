import React from "react";
import Image from "next/image";
import men from "/public/images/filter.png"
import women from "/public/images/filter (1).png"
import girl from "/public/images/filter (2).png"
import kids from "/public/images/media bg-cover.png"
import { Montserrat } from "next/font/google";

const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const Editor = () => {
  return (
    <div className="items-center mx-auto my-14">
    {/* h2 #feature-Fsection.1 */}
    <h2
      className={`${montseerat.className}items-center text-center font-bold text-[24px] text-myDark hover:text-blue-500`}
    >
      EDITOR’S PICK
    </h2>
    <p
      className={`${montseerat.className} font-normal text-[14px] text-center text-myDark hover:text-blue-500`}
    >
      Problems trying to resolve the conflict between
    </p>
    {/* row */}
    <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
      {/* Image 1 */}
      <div className="relative">
        <Image
          src="/images/filter.png" // Corrected image path
          alt="card-image-1"
          className="object-cover w-full h-auto md:w-[510px] md:h-[500px] px-8 md:px-0 transform transition duration-500 hover:scale-110"
          width={510}
          height={500}
        />
        <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white text-center px-4 py-3 shadow-lg">
          <p
            className={`${montseerat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            MEN
          </p>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative">
        <Image
          src="/images/filter (1).png" // Corrected image path
          alt="card-image-2"
          className="w-[255] h-[500px] md:w-[240px] md:h-[500px] transform transition duration-500 hover:scale-110"
          width={240}
          height={500}
        />
        <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
          <h5
            className={`${montseerat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            WOMEN
          </h5>
        </div>
      </div>

      {/* Nested grid */}
      <div className="flex flex-row lg:flex-col gap-4 flex-wrap">
        {/* Image 3 */}
        <div className="relative  mx-auto items-center">
          <Image
            src="/images/filter (2).png" // Corrected image path
            alt="card-image-3"
            className="w-[240px] h-[242px] transform transition duration-500 hover:scale-110"
            width={240}
            height={242}
          />
          <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
            <h5
              className={`${montseerat.className}items-center text-center font-bold text-[16px]  text-myDark hover:text-blue-500`}
            >
              ACCESSORIES
            </h5>
          </div>
        </div>

        {/* Image 4 */}
        <div className="relative  mx-auto items-center">
          <Image
            src="/images/media bg-cover.png" // Corrected image path
            alt="card-image-4"
            className="w-[240px] h-[242px] object-cover transform transition duration-500 hover:scale-110"
            width={240}
            height={242}
          />
          <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
            <h5
              className={`${montseerat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
            >
              KIDS
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>





  //   <div className="w-full flex justify-center py-[10px] relative bg-[#f5f5f5]">
  //   <div className="w-full lg:w-[1050px] h-auto flex flex-col gap-[30px] bg-[#FAFAFA] p-[20px] sm:p-[40px]">
  //     {/* Title Section */}
  //     <div className="flex flex-col items-center gap-[10px]">
  //       <h3 className={`${montseerat.className} font-semibold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px]`}>
  //         EDITOR’S PICK
  //       </h3>
  //       <p className="w-full sm:w-[347px] font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
  //         Problems trying to resolve the conflict between
  //       </p>
  //     </div>
  //     {/* Images Section */}
  //     <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-[30px]">
  //       {/* Men Image */}
  //       <div className="relative w-full lg:w-[510px] h-[500px] lg:h-[500px] mb-[20px] lg:mb-0">
  //         <Image
  //           src={men}
  //           alt="men"
  //           className="w-full h-full object-cover rounded-md"
  //         />
  //         <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[30px] sm:px-[50px] py-[8px] sm:py-[10px] shadow-md  font-bold text-[#252B42] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-gray-100">
  //           MEN
  //         </button>
  //       </div>
  //       {/* Women Image */}
  //       <div className="relative w-full lg:w-[240px] h-[500px] lg:h-[500px] mb-[20px] lg:mb-0">
  //         <Image
  //           src={women}
  //           alt="women"
  //           className="w-full h-full object-cover"
  //         />
  //         <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[30px] sm:px-[48px] py-[8px] sm:py-[12px] shadow-md">
  //           <h2 className={`${montseerat.className} font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]`}>
  //             WOMEN
  //           </h2>
  //         </button>
  //       </div>
  //       {/* Accessories and Kids */}
  //       <div className="flex flex-col gap-[20px] w-full lg:w-[240px]">
  //         {/* Accessories Image */}
  //         <div className="relative w-full h-[242px]">
  //           <Image
  //             src={girl}
  //             alt="accessories"
  //             className="w-full h-full object-cover"
  //           />
  //           <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] sm:px-[24px] py-[8px] sm:py-[12px] shadow-md">
  //             <h2 className={`${montseerat.className} font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]`}>
  //               ACCESSORIES
  //             </h2>
  //           </button>
  //         </div>
  //         {/* Kids Image */}
  //         <div className="relative w-full h-[242px]">
  //           <Image
  //             src={kids}
  //             alt="kids"
  //             className="w-full h-full object-cover"
  //           />
  //           <button className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] sm:px-[24px] py-[8px] sm:py-[12px] shadow-md">
  //             <h2 className={`${montseerat.className} font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#252B42]`}>
  //               KIDS
  //             </h2>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>


    // <section className="text-gray-600  mx-auto flex flex-col justify-center items-center  pt-[80px] pb-[80px] gap-6">
    //   <div className="w-[607px] h-[62px] gap-[10px] ">
    //     <h1
    //       className={`${montseerat.className} text-[#252B42] text-center text-[14px] md:text-[34px] hover:scale-105 transition-transform duration-500 ease-in-out `}
    //     >
    //       EDITOR’S PICK
    //     </h1>
    //     <p
    //       className={`${montseerat.className} text-[#252B42] text-center font-400`}
    //     >
    //       Problems trying to resolve the conflict between{" "}
    //     </p>
    //   </div>

    //   <div className="container w-full px-5 py-24 mx-auto ">
    //     <div className="flex flex-col lg:flex-row -m-4">
    //       <div className="grid grid-col-1 lg:grid-flow-col ml-10 gap-4 ">
    //         <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <Link href=""  className="block relative h-[630px] w-[450px] rounded-lg overflow-hidden">
    //             <Image
    //             width={800}
    //             height={850}
    //               alt="ecommerce"
    //               id="Image"
    //               className="object-cover object-center   w-full h-full block"
    //               src="/images/filter.png"
    //             />
    //           </Link>
    //         </div>
    //         <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <Link href=""  className="block relative h-[630px] w-[450px] rounded-lg overflow-hidden">
    //             <Image
    //             width={800}
    //             height={850}
    //               alt="ecommerce"
    //               className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
    //               src="/images/filter (1).png"
    //             />
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="relative left-10">
    //         <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <Link href=""  className="block relative h-[300px] w-[400px] rounded-lg overflow-hidden">
    //             <Image
    //             width={800}
    //             height={850}
    //               alt="ecommerce"
    //               className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
    //               src="/images/filter (2).png"
    //             />
    //           </Link>
    //         </div>
    //         <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    //           <Link href=""  className="block relative h-[300px] w-[400px] rounded-lg overflow-hidden">
    //             <Image
    //             width={800}
    //             height={850}
    //               alt="ecommerce"
    //               className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block "
    //               src="/images/media bg-cover.png"
    //             />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Editor;
