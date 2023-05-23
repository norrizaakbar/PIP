import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailMovie } from "../store/actionCreator";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  console.log(movie);
  useEffect(() => {
    dispatch(detailMovie(id));
  }, []);

  return (
    <div className="min-h-screen grid place-items-center font-mono bg-transparent">
      <div className=" rounded-md bg-green-800 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
            <img
              src={movie.Poster}
              alt="pic"
              className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div className="flex-col text-gray-300">
            <p className="pt-4 text-2xl font-bold">
              {movie.Title} ({movie.Year})
            </p>
            <hr className="hr-text" data-content="" />
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">
                {movie.Runtime} | {movie.Genre}
              </span>
              <span className="font-bold"></span>
            </div>
            <p className="hidden md:block px-4 my-4 text-sm text-left">
              {movie.Plot}
            </p>

            <p className="flex text-md px-4 my-2">
              Rating: {movie.imdbRating}/10
              <span className="font-bold px-2">|</span>
              Director: {movie.Director}
            </p>

            <div className="text-xs">
              <button
                disabled
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                {movie.Type}
              </button>

              <button
                disabled
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                Id: {movie.imdbID}
              </button>

              <button
                disabled
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                IMDB
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
