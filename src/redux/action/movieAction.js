import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovie() {
  return async (dispatch) => {
    const currentMovieApi = api.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );

    const upComingMovieApi = api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );
    
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    let [currentMovie, upComingMovie, popularMovie] = await Promise.all([
      currentMovieApi,
      upComingMovieApi,
      popularMovieApi,
    ]);

    dispatch({
      type: "GET_MOVIE_SUCCESS",
      payload: {
        currentMovie: currentMovie.data,
        upComingMovie: upComingMovie.data,
        popularMovie: popularMovie.data,
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
