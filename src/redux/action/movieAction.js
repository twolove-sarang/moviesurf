import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovie() {
  return async (dispatch) => {
    const currentMovieApi = await api.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
  };
}

export const movieAction = {
  getMovie,
};
