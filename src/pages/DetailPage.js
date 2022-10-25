import React, { useEffect } from "react";
import DetailInformation from "../component/DetailInformation";
import DetailPoster from "../component/DetailPoster";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/action/movieAction";
import { useParams } from "react-router";

const DetailPage = () => {
  // const params = useParams()
  // console.log(params)

  const dispatch = useDispatch();
  const { detailMovie } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);

  return (
    <div>
      <DetailPoster movie={detailMovie}/>
      <DetailInformation />
    </div>
  );
};

export default DetailPage;
