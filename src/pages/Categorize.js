import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { detailAction } from "../redux/action/detailAction";
import { movieAction } from "../redux/action/movieAction";

const Categorize = () => {
  const dispatch = useDispatch();
  const { getGenre, loading, gotoDetailPage } = useSelector(
    (state) => state.detail
  );
  const { popularMovie } = useSelector((state) => state.movie);
  console.log("장르가져오기", getGenre);
  console.log("디테일페이지", gotoDetailPage);
  console.log("파퓰러무비", popularMovie);
  const [changeGenre, setChangeGenre] = useState("Genre");

  useEffect(() => {
    dispatch(detailAction.getDetail());
    dispatch(movieAction.getMovie());
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color="#446ff2" loading={loading} size={100} />
      </div>
    );
  }
  return (
    <div>
      <CategoryWidth>
        {getGenre.genres &&
          getGenre.genres.map((item) => (
            <CategoryStyle onClick={() => setChangeGenre(item.name)}>
              {item.name}
            </CategoryStyle>
          ))}
      </CategoryWidth>
      <CategoryTitle>{changeGenre}</CategoryTitle>
    </div>
  );
};

export default Categorize;

const CategoryStyle = styled.button`
  color: white;
  background-color: #1f1f1f;
  padding: 15px;
  margin: 5px;
  border-radius: 50px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  font-weight: 300;
  font-size: 20px;
  cursor: pointer;

  &:active {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

const CategoryWidth = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryTitle = styled.div`
  font-family: Cafe24Ohsquare;
  font-size: 90px;
  color: white;
  margin-top: 80px;
`;

const CategoryImage = styled.div`
  width: 250px;
  height: 400px;
  margin: 4px;
  border-radius: 30px;
  text-align: center;
  background-color: white;
  opacity: 0.5;
`;

const CardGenre = styled.div``;
