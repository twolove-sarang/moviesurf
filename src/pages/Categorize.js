import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/action/movieAction";

const Categorize = () => {
  const dispatch = useDispatch();
  const { getGenre } = useSelector((state) => state.detail);
  console.log("장르가져오기", getGenre);

  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);
  return <div></div>;
};

export default Categorize;
