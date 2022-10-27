import React from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  width: 500px;
  height: 280px;
  background-size: cover;
  margin: 10px;
  cursor: pointer;
`;

const RecommendOverlay = styled.div`
  color: white;
  font-weight: 900;
  font-size: 57px;
  opacity: 0;
  width: 100%;
  height: 100%;
  text-align: center;

  &:hover {
    opacity: 0.9;
    background: rgba(43, 41, 41, 0.9);
  }
`;

const RecommendGenre = styled.div`
  font-size: 12px;
`;

const RecommendCard = ({ item }) => {
  // console.log("recommend", item);
  // console.log("detail??",detail)
  return (
    <div>
      <Card
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w500_and_h282_face/${item.poster_path}` +
            ")",
        }}
      >
        <RecommendOverlay>
          {item.title}
          {/* {item.genre_ids.map((id) => (
            <RecommendGenre>{id}</RecommendGenre>
          ))} */}
        </RecommendOverlay>
      </Card>
    </div>
  );
};

export default RecommendCard;
