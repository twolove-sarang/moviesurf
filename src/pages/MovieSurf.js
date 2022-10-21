import React from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const MovieSurf = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);

  return <div>MovieSurf</div>;
};

export default MovieSurf;
