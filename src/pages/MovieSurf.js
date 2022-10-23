import React from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Banner from "../component/Banner";

const MovieSurf = () => {
  const dispatch = useDispatch();
  const { currentMovie, upComingMovie, popularMovie } = useSelector(
    (state) => state.movie
  );
  console.log("currentMovie", currentMovie);

  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);

  return (
    <div>
      {currentMovie.results && <Banner movie={currentMovie.results[0]} />}
      <div>개봉 예정 영화</div>
    </div>
  );
};

export default MovieSurf;
