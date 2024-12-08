
        import Image from "next/image";
import React from "react";

        const ProductDetails = () => {
          return (
            <div className="px-4 sm:px-8 lg:px-16 py-8 flex flex-col lg:flex-row items-start gap-8">
              {/* Left Section - Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <Image
                    src="/images/single-product-1-cover-2.jpg"
                    alt="Product"
                    width={800}
                    height={774}
                    className="w-full rounded-lg"
                  />
                  <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-2 mt-4">
                  <Image
                    src="/images/single-product-1-cover-2.jpg"
                    alt="Thumbnail 1"
                    width={800}
                    height={774}
                    className="w-20 h-20 rounded-lg cursor-pointer hover:border-2 hover:border-blue-500"
                  />
                  <Image
                    src="/images/single-product-1-thumb-1.jpg"
                    alt="Thumbnail 2"
                    width={800}
                    height={774}
                    className="w-20 h-20 rounded-lg cursor-pointer hover:border-2 hover:border-blue-500"
                  />
                  <Image
                    src="/images/product-cover-5 (19).png"
                    alt="Thumbnail 3"
                    width={800}
                    height={774}
                    className="w-20 h-20 rounded-lg cursor-pointer hover:border-2 hover:border-blue-500"
                  />
                </div>
              </div>
        
              {/* Right Section - Details */}
              <div className="w-full py-20 lg:w-1/2">
                <h1 className="text-2xl font-bold">Floating Phone</h1>
                <div className="flex items-center mt-12">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853 1.418 8.267L12 18.896l-7.418 4.972L6 15.601 0 9.748l8.332-1.73L12 .587z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 mt-6 text-gray-500 text-sm">(10 Reviews)</span>
                </div>
                <p className="text-3xl  font-semibold text-gray-800 mt-12">$1,139.33</p>
                <p className="text-green-600 mt-6">Availability: <span className="font-medium">In Stock</span></p>
                <p className="text-gray-600 mt-4 w-52">
                  Met minim Mollie non desert Alamo est sit aliqua dolor do amet sint. 
                  RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <span className="font-medium">Colors:</span>
                  <div className="flex gap-2">
                    <button className="w-6 h-6 rounded-full bg-blue-500 border-2 border-transparent hover:border-gray-400"></button>
                    <button className="w-6 h-6 rounded-full bg-green-500 border-2 border-transparent hover:border-gray-400"></button>
                    <button className="w-6 h-6 rounded-full bg-red-500 border-2 border-transparent hover:border-gray-400"></button>
                    <button className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-transparent hover:border-gray-400"></button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Select Options
                  </button>
                  <button className="p-3 border rounded-lg hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h18M9 21h6M10 7h4M4 11h16"
                      />
                    </svg>
                  </button>
                  <button className="p-3 border rounded-lg hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a4 4 0 10-8 0v2m0 4a4 4 0 108 0m-2 4v2a2 2 0 11-4 0v-2m0-4h-4m8 0h4"
                      />
                    </svg>
                  </button>
                  <button className="p-3 border rounded-lg hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H3m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        };
        
        export default ProductDetails;
        