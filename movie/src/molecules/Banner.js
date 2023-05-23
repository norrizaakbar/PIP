import React from "react";

const Banner = () => {
  return (
    <div className="relative mx-auto  max-w-7xl rounded-3xl overflow-hidden hover:scale-x-105 transition-all duration-200">
      <div className="py-16 sm:py-28 px-4 flex justify-center items-center bg-gradient-to-br from-gray-700 to-gray-900">
        {/* :IMAGE BACKGROUND */}
        <img
          src="https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/12/25/407835577.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-top filter mix-blend-overlay"
        />

        {/* :PROMO */}
        <div className="relative max-w-2xl flex flex-col justify-center items-center text-center">
          {/* ::Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-extrabold tracking-wide">
            New arrivals are here
          </h2>
          {/* ::Text */}
          <p className="mt-3 text-sm sm:text-base text-white font-medium">
            Dom Toretto and his family are targeted by the vengeful son of drug
            kingpin Hernan Reyes.
          </p>
          {/* ::Button */}
          <a
            href="#link"
            className="mt-6 py-2.5 px-6 shadow rounded bg-gray-50 text-sm sm:text-base text-gray-700 font-semibold hover:shadow-lg hover:bg-white hover:text-gray-900"
          >
            Shop New Arrivals
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
