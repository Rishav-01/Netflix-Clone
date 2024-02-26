import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieServices";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow title={"Upcoming"} url={endpoints.upcoming} />
      <MovieRow title={"Trending"} url={endpoints.trending} />
      <MovieRow title={"Top rated"} url={endpoints.topRated} />
      <MovieRow title={"Comedy"} url={endpoints.comedy} />
      <MovieRow title={"Popular"} url={endpoints.popular} />
    </>
  );
};

export default Home;
