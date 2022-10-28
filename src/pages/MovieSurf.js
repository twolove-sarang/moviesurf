import React from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardSection from "../component/CardSection";
import BannerSection from "../component/BannerSection";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import styled, { css } from "styled-components";

const MovieSurf = () => {
  let [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { currentMovie, upComingMovie, popularMovie } = useSelector(
    (state) => state.movie
  );
  // console.log("currentMovie", currentMovie);

  useEffect(() => {
    setLoading();
    dispatch(movieAction.getMovie());
  }, []);

  // 컴포넌트로 movie데이터 넘겨주기(movie 데이터의 result array.poster_path
  // 컴포넌트에서 map으로 받기
  return (
    <div>
      {loading ? (
        <div className="loader">
          <ClipLoader color="#446ff2" loading={loading} size={100}/>
        </div>
      ) : (
        <div>
          {popularMovie && <BannerSection movie={popularMovie} />}
          {upComingMovie.results && (
            <CardSection movie={upComingMovie} name={"개봉 예정 영화"} />
          )}
          {currentMovie.results && (
            <CardSection movie={currentMovie} name={"최신 영화"} />
          )}
          {popularMovie.results && (
            <CardSection movie={popularMovie} name={"인기 있는 영화"} />
          )}
        </div>
      )}
    </div>
  );
};

export default MovieSurf;
