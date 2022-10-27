let initialState = {
  currentMovie: {},
  upComingMovie: {},
  popularMovie: {},
  gotoDetailPage: {},
  getReview: {},
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
        // detailMovie : payload.detailMovie,
      };

    case "GET_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        gotoDetailPage: payload.gotoDetailPage,
        getReview: payload.getReview,
      };
      
    default:
      return { ...state };
  }
}

export default movieReducer;
