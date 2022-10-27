import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailPoster from "../component/DetailPoster";
import ReviewSection from "../component/ReviewSection";
import { detailAction } from "../redux/action/detailAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CastSection from "../component/CastSection";
import RecommendSection from "../component/RecommendSection";
import KeywordSection from "../component/KeywordSection";

const API_KEY = process.env.REACT_APP_API_KEY;
const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { gotoDetailPage, getReview, castInfo, recommendation, keyword } =
    useSelector((state) => state.movie);
  console.log("디테일", gotoDetailPage);
  // console.log("캐스트", castInfo);
  // console.log("추천", recommendation);
  // console.log("키워드", keyword);

  useEffect(() => {
    dispatch(detailAction.getDetail(id));
  }, []);

  return (
    <div>
      {gotoDetailPage && <DetailPoster detail={gotoDetailPage} />}
      {castInfo.cast && <CastSection cast={castInfo} />}
      {keyword.keywords && <KeywordSection keyword={keyword} />}
      {getReview.results && <ReviewSection review={getReview} />}
      {recommendation.results && (
        <RecommendSection recommend={recommendation} />
      )}
    </div>
  );
};

export default DetailPage;
