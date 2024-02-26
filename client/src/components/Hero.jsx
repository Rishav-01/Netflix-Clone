import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints, { createImgUrl } from "../services/movieServices";

const Hero = () => {
  const [movie, setMovies] = useState({});

  const fetchMovies = async () => {
    await axios.get(endpoints.popular).then((res) => {
      const movies = res.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovies(randomMovie);
    });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const { title, backdrop_path, release_date, overview } = movie;

  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? `${str.slice(0, length)}...` : str;
  };

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={createImgUrl(backdrop_path, "original")}
          alt={title}
        />

        <div className="absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-roboto font-bold">
            {title}
          </h1>
          <div className="mt-8 mb-4">
            <button className="border bg-gray-300 text-black font-bold py-2 px-5">
              Play
            </button>
            <button className="border border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">{release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncate(overview, 171)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
