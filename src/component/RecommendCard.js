import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import styled from "styled-components";

const RecommendCard = ({ item }) => {
  const { getGenre } = useSelector((state) => state.detail);
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
          {item.genre_ids &&
          item.genre_ids.map((id) => (
            <RecommendGenre>
              {getGenre.genres.find((item) => item.id == id).name}
            </RecommendGenre>
          ))}
        </RecommendOverlay>
      </Card>
    </div>
  );
};

export default RecommendCard;

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
  // width: 100%;
  height: 260px;
  padding: 15px;

  &:hover {
    opacity: 0.6;
    background: black;
  }
`;

const RecommendGenre = styled.div`
  font-size: 12px;
  display: flex;
`;
