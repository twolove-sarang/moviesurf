let initialState = {
  currentMovie: {},
  upComingMovie: {},
  popularMovie: {},
  getGenre: [],
  loading: true,
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        currentMovie: payload.currentMovie,
        upComingMovie: payload.upComingMovie,
        popularMovie: payload.popularMovie,
        getGenre: payload.getGenre,
        loading: false,
      };

    case "GET_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
