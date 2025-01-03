import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const montseerat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const Bestselling = () => {
  return (
  

    <section className="text-gray-600   pt-[80px] pb-[80px] gap-6 body-font">
      <div className="flex flex-col justify-center items-center">
        <h4
          className={`${montseerat.className} text-[#252B42] font-400 text-[20px] `}
        >
          {" "}
          Featured Products
        </h4>
        <h3
          className={`${montseerat.className} font-bold text-[20px] sm:[28px] lg:text-[34px] text-[#252B42]`}
        >
          BESTSELLER PRODUCTS
        </h3>
        <p className={`${montseerat.className} text-sm text-[#252B42]`}>
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={500}
              height={500}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5.png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-center gap-1 mr-16 mt-2 ">
              <span className="flex w-3 h-3 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={500}
              height={500}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (1).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center" >
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">$21.15</p>
            </div>
            <div className="flex justify-center gap-1 mr-16 mt-2">
              <span className="flex w-3 h-3 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={500}
              height={500}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (2).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
            <div className="flex justify-center gap-1 mr-16 mt-2 ">
              <span className="flex w-3 h-3 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={500}
              height={500}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (3).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
            <div className="flex justify-center gap-1 mr-16 mt-2">
              <span className="flex w-3 h-3 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={500}
              height={500}
                alt="ecommerce"
                className="object-cover object-centerhover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (8).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-center gap-1 mr-16 mt-2 ">
              <span className="flex w-3 h-3 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={500}
              height={500}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (4).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">$21.15</p>
            </div>
            <div className="flex justify-center gap-1 mr-16 mt-2">
              <span className="flex w-3 h-3 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={500}
              height={500}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (5).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
            <div className="flex justify-center gap-1 mr-16 mt-2 ">
              <span className="flex w-3 h-3 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href="" className="block relative h-[450px] w-72 rounded overflow-hidden">
              <Image
              width={500}
              height={500}
                alt="ecommerce"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out  w-full h-full block"
                src="/images/product-cover-5 (6).png"
              />
            </Link>
            <div className="mt-4 mr-20 flex flex-col justify-center items-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
            <div className="flex justify-center gap-1 mr-16 mt-2">
              <span className="flex w-3 h-3 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>
              <span className="flex w-3 h-3 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestselling;
