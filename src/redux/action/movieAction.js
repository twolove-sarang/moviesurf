import api from "../api";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovie() {
  return async (dispatch) => {
    // const {id} = useParams();
    const currentMovieApi = api.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );

    const upComingMovieApi = api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    // detail 정보를 갸져오고 싶은데 movie.id가 필요하다.
    // moviesurf에서 포스터를 누르면 detail페이지로 이동한다.
    // const detailMovieApi = api.get(
    //   `/movie/${id}?api_key=${API_KEY}&language=en-US`
    // );

    let [currentMovie, upComingMovie, popularMovie, detailMovie] =
      await Promise.all([
        currentMovieApi,
        upComingMovieApi,
        popularMovieApi,
        // detailMovieApi,
      ]);

    dispatch({
      type: "GET_MOVIE_SUCCESS",
      payload: {
        currentMovie: currentMovie.data,
        upComingMovie: upComingMovie.data,
        popularMovie: popularMovie.data,
        // detailMovie: detailMovie.data,
      },
    });

    // console.log("데이터가 잘 왔니?a", currentMovie);
    // console.log("데이터가 잘 왔니?b", upComingMovie);
    // console.log("데이터가 잘 왔니?c", popularMovie);
  };
}

export const movieAction = {
  getMovie,
};
