import React from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MovieSurf = () => {
  const dispatch = useDispatch();
  const {currentMovie,upComingMovie,popularMovie} = useSelector(state => state.movie)
  console.log("currentMovie",currentMovie)

  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);

  return <div>MovieSurf</div>;
};

export default MovieSurf;
