import Image from "next/image";
import Link from "next/link";


const Shopping = () => {
  // Array of image URLs
  const images = [
    "/images/product-cover-5 (4).png",
    "/images/product-cover-5 (5).png", 
    "/images/filter (2).png",
    "/images/product-cover-5 (12).png", 
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Shop</h1>
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>{" "}
          / <span className="text-gray-700">Shop</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <Image
            width={300}
            height={500}
              src={image}
              alt={`Category ${index + 1}`}
              className="w-full h-72 object-fit group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-opacity">
              <div className="text-center text-white">
                <h2 className="text-lg font-semibold">CLOTHS</h2>
                <p className="text-sm">5 Items</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-24 space-y-4 sm:space-y-0">
        <p className="text-sm text-gray-500">Showing all 12 results</p>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button className="p-2 border rounded-lg hover:bg-gray-100">
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
                  d="M3 4h7v7H3V4zm0 9h7v7H3v-7zm9-9h8v7h-8V4zm0 9h8v7h-8v-7z"
                />
              </svg>
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-100">
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <select className="border p-2 rounded-lg focus:outline-none">
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shopping;







