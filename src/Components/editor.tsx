import React from "react";
import Image from "next/image";

import { Montserrat } from "next/font/google";
import Link from "next/link";
const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const Editor = () => {
  return (
    <section className="text-gray-600  mx-auto flex flex-col justify-center items-center  pt-[80px] pb-[80px] gap-6">
      <div className="w-[607px] h-[62px] gap-[10px] ">
        <h1
          className={`${montseerat.className} text-[#252B42] text-center text-[14px] md:text-[34px] hover:scale-105 transition-transform duration-500 ease-in-out `}
        >
          EDITOR’S PICK
        </h1>
        <p
          className={`${montseerat.className} text-[#252B42] text-center font-400`}
        >
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>

      <div className="container w-full px-5 py-24 mx-auto ">
        <div className="flex flex-col lg:flex-row -m-4">
          <div className="grid grid-col-1 lg:grid-flow-col ml-10 gap-4 ">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href=""  className="block relative h-[630px] w-[450px] rounded-lg overflow-hidden">
                <Image
                width={800}
                height={850}
                  alt="ecommerce"
                  id="Image"
                  className="object-cover object-center   w-full h-full block"
                  src="/images/filter.png"
                />
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href=""  className="block relative h-[630px] w-[450px] rounded-lg overflow-hidden">
                <Image
                width={800}
                height={850}
                  alt="ecommerce"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                  src="/images/filter (1).png"
                />
              </Link>
            </div>
          </div>
          <div className="relative left-10">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href=""  className="block relative h-[300px] w-[400px] rounded-lg overflow-hidden">
                <Image
                width={800}
                height={850}
                  alt="ecommerce"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                  src="/images/filter (2).png"
                />
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href=""  className="block relative h-[300px] w-[400px] rounded-lg overflow-hidden">
                <Image
                width={800}
                height={850}
                  alt="ecommerce"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block "
                  src="/images/media bg-cover.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editor;
