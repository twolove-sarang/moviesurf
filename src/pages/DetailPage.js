import React,{ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieAction } from "../redux/action/movieAction";
import DetailInformation from "../component/DetailInformation";
import DetailPoster from "../component/DetailPoster";


const DetailPage = () => {
  // const dispatch = useDispatch();

  // const { detailMovie } = useSelector(
  //   (state) => state.movie
  // );

  // useEffect(() => {
  //   dispatch(movieAction.getMovie());
  // }, []);

  // console.log("디테일페이지", detailMovie);


  return (
    <div>
      {/* <DetailPoster movie={detailMovie}/> */}
      <DetailInformation/>
    </div>
  );
};

export default DetailPage;
