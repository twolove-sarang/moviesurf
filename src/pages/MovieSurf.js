import React from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Banner from "../component/Banner";
import CardSection from "../component/CardSection";
import Cards from "../component/Cards";

const MovieSurf = () => {
  const dispatch = useDispatch();
  const { currentMovie, upComingMovie, popularMovie } = useSelector(
    (state) => state.movie
  );
  // console.log("currentMovie", currentMovie);

  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);

  // 컴포넌트로 movie데이터 넘겨주기(movie 데이터의 result array.poster_path
  // 컴포넌트에서 map으로 받기
  return (
    <div>
      {currentMovie.results && <Banner movie={currentMovie.results[14]} />}
      {currentMovie.results && <CardSection movie={currentMovie} /> }
      {upComingMovie.results && <CardSection movie={upComingMovie} /> }
      {popularMovie.results && <CardSection movie={popularMovie} /> }
    </div>
  );
};

export default MovieSurf;
