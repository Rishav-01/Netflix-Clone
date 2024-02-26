import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { MdArrowBackIosNew, MdArrowForward } from "react-icons/md";

const MovieRow = ({ title, url }) => {
  const rowId = Math.floor(Math.random() * 1000);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    await axios.get(url).then((res) => {
      const movies = res.data.results;
      setMovies(movies);
    });
  };

  useEffect(() => {
    fetchMovies();
  }, [url]);

  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft += offset;
  };

  return (
    <>
      <h2 className="font-roboto font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdArrowBackIosNew
          onClick={() => slide(-500)}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={25}
        />
        <div
          id={`slider${rowId}`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <MdArrowForward
          onClick={() => slide(500)}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={25}
        />
      </div>
    </>
  );
};

export default MovieRow;
