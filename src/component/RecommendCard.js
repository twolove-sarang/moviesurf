import React from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  width: 500px;
  height: 280px;
  background-size: cover;
  margin: 10px;
  cursor: pointer;
`;

const RecommendTitle = styled.div`
  color: white;
  font-weight: 900;
  text-align: center;

`;
const RecommendCard = ({ item }) => {
  return (
    <div>
      
      <Card
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w500_and_h282_face/${item.poster_path}` +
            ")",
        }}
      ></Card>
      <RecommendTitle>{item.title}</RecommendTitle>
    </div>
  );
};

export default RecommendCard;
