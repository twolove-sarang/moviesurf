let initialState = {
  currentMovie: {},
  upComingMovie: {},
  popularMovie: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        currentMovie: payload.currentMovie,
        upComingMovie: payload.upComingMovie,
        popularMovie: payload.popularMovie,
        detailMovie : payload.detailMovie,
      };
      default:
        return {...state}
  }
}

export default movieReducer;
