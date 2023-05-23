import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  //   console.log(movie);
  return (
    <>
      <Link
        to={`detail/${movie.imdbID}`}
        className="p-1 text-center aspect-[2/4] h-[21rem] bg-white sm:aspect-[3/4] rounded-xl shadow-2xl hover:scale-105 transition-all duration-200 hover:bg-lime-100"
      >
        <img
          className="rounded-xl object-fill  mb-3 w-full aspect-[2/3] sm:h-60"
          src={movie.Poster}
          // alt={data.title}
        />
        <div className="px-1">
          <div className="flex items-end justify-center mb-1">
            <p className="text-xs text-slate-700">{movie.Year}</p>
          </div>
          <p className="leading-5 font-medium text-base mb-1">{movie.Title}</p>
        </div>
      </Link>
    </>
  );
};

export default Card;
