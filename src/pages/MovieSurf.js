import React from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Banner from "../component/Banner";
import { Container } from "react-bootstrap";
import CardSection from "../component/CardSection";

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
    <Container>
      {currentMovie.results && <Banner movie={currentMovie.results[14]} />}
      {upComingMovie.results && <CardSection movie={upComingMovie.results[0]}/>}
    </Container>
  );
};

export default MovieSurf;
