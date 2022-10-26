import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailPoster from "../component/DetailPoster";

const API_KEY = process.env.REACT_APP_API_KEY;
const DetailPage = () => {
  let { id } = useParams();
  // console.log("params", id);
  const [detail, setDetail] = useState(null);
  const gotoDetailPage = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    setDetail(data);
  };

  useEffect(() => {
    gotoDetailPage();
    // DetailReview();
  }, []);

  return (
    <div>
    <DetailPoster detail={detail}/>
    </div>
  );
};

export default DetailPage;
