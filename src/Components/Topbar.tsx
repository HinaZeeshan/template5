import Image from "next/image";
import Link from "next/link";
import { FiYoutube } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const TopHeader = () => {
  return (
    <div>
      {/* Navbar Dark */}
      {/* Responsive Navbar */}
      <div className="w-full h-[58px] items-center bg-[#252B42] px-6 sm:px-6 lg:px-8 lg:pt-5 hidden lg:block">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 ">
            {[
              { src: "/images/icn settings .icn-xl.png", text: "(225) 555-0118" },
              {
                src: "/images/icn settings .icn-xl (2).png",
                text: "michelle.rivera@example.com",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Image src={item.src} alt="icon" width={16} height={16} />
                <h6 className="font-bold text-sm text-white hover:text-blue-500">
                  {item.text}
                </h6>
              </div>
            ))}
          </div>

          {/* Promo */}
          <h6 className="font-bold text-sm text-white text-center hover:text-blue-500">
            Follow Us and get a chance to win 80% off
          </h6>

          {/* Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <h6 className="font-bold text-sm text-white hover:text-blue-500">
              Follow Us:
            </h6>
            <div className="flex gap-2 text-white">
               {/* Right Section */}
         <div className="flex flex-wrap items-center  justify-center md:justify-end space-x-3">
          
           <Link href="#" className="hover:text-blue-300">
             <IoLogoInstagram className="text-xl" />
           </Link>
           <Link href="#" className="hover:text-blue-300">
             <FiYoutube className="text-xl" />
           </Link>
           <Link href="#" className="hover:text-blue-300">
             <CiFacebook className="text-xl" />
           </Link>
           <Link href="#" className="hover:text-blue-300">
             <FiTwitter className="text-xl" />
           </Link>
         </div>
              {/* {["instagram", "youtube", "facebook", "twitter"].map((social) => (
                <Link href="" key={social}>
                  <Image
                    src={`/images/${social}.png`}
                    alt={social}
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px]"
                  />
                </Link>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;



// import React from "react";
// import { FiYoutube } from "react-icons/fi";
// import { CiFacebook } from "react-icons/ci";
// import { FiTwitter } from "react-icons/fi";
// import { IoLogoInstagram } from "react-icons/io";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { Montserrat } from "next/font/google";

// const montseerat = Montserrat({
//   subsets: ["latin"],
//   weight: "700",
// });

// const TopBar = () => {
//   return (
//     <div className="bg-[#252B42] text-white text-sm py-2 px-4">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
//         {/* Left Section */}
//         <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
//           <div className="flex items-center space-x-2">
//             <FaPhoneAlt className="text-base" />
//             <span>(225) 555-0118</span>
//           </div>
//           <span className="hidden sm:inline">|</span>
//           <div className="flex items-center space-x-2">
//             <MdOutlineMailOutline className="text-xl" />
//             <span className={`${montseerat.className}`}>
//               michelle.rivera9@example.com
//             </span>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className={`text-center md:text-left ${montseerat.className}`}>
//           Follow us and get a chance to win 80% off
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-wrap items-center justify-center md:justify-end space-x-3">
//           <span>Follow Us:</span>
//           <a href="#" className="hover:text-blue-300">
//             <IoLogoInstagram className="text-xl" />
//           </a>
//           <a href="#" className="hover:text-blue-300">
//             <FiYoutube className="text-xl" />
//           </a>
//           <a href="#" className="hover:text-blue-300">
//             <CiFacebook className="text-xl" />
//           </a>
//           <a href="#" className="hover:text-blue-300">
//             <FiTwitter className="text-xl" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;





// // import React from 'react';
// // import { FiYoutube } from "react-icons/fi";
// // import { CiFacebook } from "react-icons/ci";
// // import { FiTwitter } from "react-icons/fi";
// // import { IoLogoInstagram } from "react-icons/io";
// // import { FaPhoneAlt } from "react-icons/fa";
// // import { MdOutlineMailOutline } from "react-icons/md";
// // import  { Montserrat } from 'next/font/google'
// //  const montseerat = Montserrat({
// //    subsets: ['latin'],
// //    weight: '700',
// // });

// // const TopBar = () => {
// //   return (
// //     <div className="bg-[#252B42] text-white text-sm py-2 px-4">
// //       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
// //         {/* Left Section */}
// //         <div className="flex items-center space-x-4">
// //         <FaPhoneAlt className='text-base' /><span>(225) 555-0118</span>
// //           <span className="hidden sm:inline">|</span>
// //           <MdOutlineMailOutline className='text-xl'/> <span className={`${montseerat.className} `}>  michelle.rivera9@example.com</span>
// //         </div>
// //         {/* Middle Section */}
// //         <div className={`mt-2 sm:mt-0 ${montseerat.className} `}>
// //           Follow us and get a chance to win 80% off
// //         </div>
// //         {/* Right Section */}
// //         <div className="flex items-center space-x-3 mt-2 sm:mt-0">
// //           <span>Follow Us :</span>
// //           <a href="#" className="hover:text-blue-300">
// //           <IoLogoInstagram className='text-xl'/>
// //           </a>
// //           <a href="#" className="hover:text-blue-300">
// //           <FiYoutube className='text-xl' />
// //           </a>
// //           <a href="#" className="hover:text-blue-300">
// //           <CiFacebook className='text-xl' />
// //           </a>
// //           <a href="#" className="hover:text-blue-300">
// //           <FiTwitter className='text-xl' />
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TopBar;
