import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const gotoDetailPageApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );

      const getReviewApi = api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );

      const castInfoApi = api.get(
        `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );

      const recommendationApi = api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );

      const keywordApi = api.get(`/movie/${id}/keywords?api_key=${API_KEY}`);

      const getGenreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [
        gotoDetailPage,
        getReview,
        castInfo,
        recommendation,
        keyword,
        getGenre,
      ] = await Promise.all([
        gotoDetailPageApi,
        getReviewApi,
        castInfoApi,
        recommendationApi,
        keywordApi,
        getGenreApi,
      ]);

      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          gotoDetailPage: gotoDetailPage.data,
          getReview: getReview.data,
          castInfo: castInfo.data,
          recommendation: recommendation.data,
          keyword: keyword.data,
          getGenre: getGenre.data,
          loading: false,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_FAILURE" });
    }
  };
}
export const detailAction = {
  getDetail,
};
