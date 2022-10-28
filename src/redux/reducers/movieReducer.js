let initialState = {
  currentMovie: {},
  upComingMovie: {},
  popularMovie: {},
  getGenre : [],
  gotoDetailPage: {},
  getReview: {},
  castInfo: {},
  recommendation: {},
  keyword: {},
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
        getGenre : payload.getGenre,
      };

    case "GET_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        gotoDetailPage: payload.gotoDetailPage,
        getReview: payload.getReview,
        castInfo: payload.castInfo,
        recommendation: payload.recommendation,
        keyword: payload.keyword,
      };

    default:
      return { ...state };
  }
}

export default movieReducer;
