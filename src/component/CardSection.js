import React from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  // border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  height: 400px;
  background-size: cover;
  margin: 4px 4px;
`;

const CardAlign = styled.div`
  display: flex;
  justify-content: center;
`;

// 텍스트 위치ㅠㅠㅠㅠㅠㅠㅠㅠ 아놔..
const CardTitle = styled.div`
  display : flex;
  justify-content : space-between;
  color: white;
  font-size: 25px;
  font-weight: 700;
  width: 1290px;
  text-align: left;
  margin : 30px auto;
`;

const CardMore = styled.div`
  font-size : 20px;
  color : #9f9f9f;
  line-height : 40px;
`

const CardSection = ({ movie }) => {
  return (
    <div>
      <CardTitle>
        <div>개봉 예정 영화</div>
        <CardMore>더보기</CardMore>
      </CardTitle>
      <CardAlign>
        <Card
          style={{
            backgroundImage:
              "url(" +
              `	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
              ")",
          }}
        />
        <Card
          style={{
            backgroundImage:
              "url(" +
              `	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
              ")",
          }}
        />
        <Card
          style={{
            backgroundImage:
              "url(" +
              `	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
              ")",
          }}
        />
        <Card
          style={{
            backgroundImage:
              "url(" +
              `	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
              ")",
          }}
        />
        <Card
          style={{
            backgroundImage:
              "url(" +
              `	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
              ")",
          }}
        />
      </CardAlign>
    </div>
  );
};

export default CardSection;
