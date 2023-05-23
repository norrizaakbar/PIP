import React from "react";
import { BiCameraMovie } from "react-icons/bi";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="w-full bg-transparent text-blue-400 body-font  ">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* ::Site logo and Name */}
        <Link
          to="/"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <div className="flex w-10 rounded-full overflow-hidden">
            <BiCameraMovie
              size={30}
              color="rgb(34 197 94 / var(--tw-text-opacity))"
            />
          </div>
          <span className="ml-3 text-2xl text-slate-700 font-semibold antialiased">
            MOVIECITY
          </span>
        </Link>

        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer"></div>
      </div>
    </header>
  );
}
