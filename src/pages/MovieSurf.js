import React from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardSection from "../component/CardSection";
import BannerSection from "../component/BannerSection";
import ClipLoader from "react-spinners/ClipLoader";

const MovieSurf = () => {
  const dispatch = useDispatch();
  const { currentMovie, upComingMovie, popularMovie, loading } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);
  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color="#446ff2" loading={loading} size={100} />
      </div>
    );
  }
  return (
    <div>
      <BannerSection movie={popularMovie} />
      <CardSection movie={upComingMovie} name={"개봉 예정 영화"} />
      <CardSection movie={currentMovie} name={"최신 영화"} />
      <CardSection movie={popularMovie} name={"인기 있는 영화"} />
    </div>
  );
};

export default MovieSurf;
