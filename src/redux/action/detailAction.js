import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getDetail(id) {
  return async (dispatch) => {
    const gotoDetailPageApi = api.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    const getReviewApi = api.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    let [gotoDetailPage, getReview] = await Promise.all([
      gotoDetailPageApi,
      getReviewApi
    ]);

    dispatch({
      type: "GET_MOVIE_DETAIL_SUCCESS",
      payload: {
        gotoDetailPage: gotoDetailPage.data,
        getReview: getReview.data,
      },
    });
  };
}
export const detailAction = {
  getDetail,
};
