import { Link } from "react-router-dom";

function MainContent() {
  return (
    <main className="py-8">
      <div className="flex flex-col md:flex-row items-center mx-auto max-w-[1280px] space-y-8 md:space-y-0 md:space-x-8 px-4">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            YOUR FEET DESERVE THE BEST
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6 font-semibold text-2xl md:text-3xl">
            YOUR FEET DESERVE THE BEST, AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          {/* Buttons Section */}

          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <Link to="/products">
              <button className="px-6 py-3 bg-orange-800 text-white font-medium rounded-md hover:bg-orange-700 transform hover:scale-105 transition-all text-lg">
                Shop Now
              </button>
            </Link>
            <button className="px-6 py-3 bg-gray-100 text-orange-800 font-medium rounded-md border border-orange-800 hover:bg-orange-700 hover:text-white transform hover:scale-105 transition-all text-lg">
              Category
            </button>
          </div>

          {/* Shopping Section (smaller size) */}
          <div>
            <p className="text-gray-500 mb-2 font-medium text-base">
              Also Available On
            </p>
            <img
              src="/src/assets/shops.png"
              alt="Shop logos"
              className="mx-auto md:mx-0 w-1/3 md:w-1/4"
            />
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/src/assets/shoe_image.png"
            alt="Hero Shoe"
            className="max-w-[800px] max-h-[800px] object-contain h-auto"
          />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
