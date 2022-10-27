import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailPoster from "../component/DetailPoster";
import ReviewSection from "../component/ReviewSection";
import { detailAction } from "../redux/action/detailAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { gotoDetailPage, getReview } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(detailAction.getDetail(id));
  }, []);

  return (
    <div>
      <DetailPoster detail={gotoDetailPage} />
      <ReviewSection review={getReview} />
    </div>
  );
};

export default DetailPage;
