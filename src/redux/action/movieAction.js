import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovie() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const currentMovieApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingMovieApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const getGenreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [currentMovie, upComingMovie, popularMovie, getGenre] =
        await Promise.all([
          currentMovieApi,
          upComingMovieApi,
          popularMovieApi,
          getGenreApi,
        ]);

      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: {
          currentMovie: currentMovie.data,
          upComingMovie: upComingMovie.data,
          popularMovie: popularMovie.data,
          getGenre: getGenre.data,
          loading: false,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovie,
};
