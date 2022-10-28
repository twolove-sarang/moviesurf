let initialState = {
  gotoDetailPage: {},
  getReview: {},
  castInfo: {},
  recommendation: {},
  keyword: {},
  getGenre:[],
  loading: true,
};

function detailReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        gotoDetailPage: payload.gotoDetailPage,
        getReview: payload.getReview,
        castInfo: payload.castInfo,
        recommendation: payload.recommendation,
        keyword: payload.keyword,
        getGenre : payload.getGenre,
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

export default detailReducer;
