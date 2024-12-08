




import React from "react";
import Image from "next/image";

const Pick = () => {
  return (
    <div className=" container flex flex-col justify-center items-center  h-[826px] mt-10 w-auto max-w-screen-xl mx-auto bg-[#FAFAFA] ">
      <h1 className=" text-center text-[#000000] bg-slate-400 font-bold text-[24px] md:text-[48px] leading-[57.6px]  uppercase ">
      EDITOR’S PICK
      </h1>
      <p className="mt-2 text-center text-sm md:text-base text-gray-600">Problems trying to resolve the conflict between </p>
      <div className=" w-[1150px] h-auto sm:h-[626px] grid grid-co md:grid-cols-2 mt-[30px]    ">
        {/*   men */}
        <div className="w-[535px] h-[500px] mt-[22px] rounded-[10px] bg-[#ffffff] group relative right-24 overflow-hidden ">
          <Image
            src="/images/filter.png"
            alt="men"
            width={973}
            height={649}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 w-[114px] h-[49px] mt-96 ml-[36px] ">
            <span className="bg-white font-semibold text-[26px] p-4 leading-[48.6px] text-[#000000] ">
              MEN
            </span>
          </div>
        </div>

        {/*women */}
        <div className="w-[435px] h-[500px] mt-[22px] rounded-[10px] bg-[#ffffff] group relative right-[120px] overflow-hidden ">
          <Image
            src="/images/filter (1).png"
            alt="women"
            width={973}
            height={649}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 w-[114px] h-[49px] mt-96 ml-[36px] ">
            <span className=" bg-white p-4 font-semibold text-[26px] leading-[48.6px] text-[#000000] ">
              WOMEN
            </span>
          </div>
        </div>

        {/*Accessesorries */}
        <div className="w-[320px] h-[230px] rounded-[10px]  ml-[930px] bg-[#ffffff] group relative bottom-[500px]  overflow-hidden">
          <Image
            src="/images/filter (2).png"
            alt="Accessories"
            width={306}
            height={470}
            className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 w-[114px] h-[49px] mt-40 ml-[36px] ">
            <span className="bg-white p-4 font-semibold text-[26px] leading-[48.6px] text-[#000000] ">
              ACCESSESORIES
            </span>
          </div>
        </div>

        {/* kids*/}
        <div className="w-[320px] h-[230px] ml-[350px] rounded-[10px] bg-[#ffffff] group relative bottom-[250px] overflow-hidden">
          <Image
            src="/images/media bg-cover.png"
            alt="kids"
            width={973}
            height={249}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 w-[114px] h-[49px] mt-40 ml-[36px] ">
            <span className="font-semibold bg-white p-4 text-[26px] leading-[48.6px] text-[#000000] ">
              KIDS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;




