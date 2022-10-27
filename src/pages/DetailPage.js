import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailPoster from "../component/DetailPoster";
import ReviewSection from "../component/ReviewSection";
import { detailAction } from "../redux/action/detailAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CastSection from "../component/CastSection";

const API_KEY = process.env.REACT_APP_API_KEY;
const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { gotoDetailPage, getReview, castInfo, recommendation } = useSelector(
    (state) => state.movie
  );
  console.log("디테일", gotoDetailPage);
  console.log("캐스트", castInfo);
  console.log("추천", recommendation);

  useEffect(() => {
    dispatch(detailAction.getDetail(id));
  }, []);

  return (
    <div>
      {gotoDetailPage && <DetailPoster detail={gotoDetailPage} />}
      {castInfo.cast && <CastSection cast={castInfo} />}
      {getReview.results && <ReviewSection review={getReview} />}
    </div>
  );
};

export default DetailPage;
