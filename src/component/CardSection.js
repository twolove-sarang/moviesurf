import React from "react";
import styled, { css } from "styled-components";
import Cards from "./Cards";

const Card = styled.div`
  // border: 1px solid black;
  // border-radius: 20px;
  // width: 250px;
  // height: 400px;
  // background-size: cover;
  // margin: 4px 4px;
`;

//더보기 정렬
const CardAlign = styled.div`
  display: flex;
  // justify-content: space-between;
`;

const CardTitle = styled.div`
  // display: flex;
  // justify-content: space-between;
  color: white;
  font-size: 25px;
  font-weight: 700;
  width: 1290px;
  text-align: left;
  margin: 30px auto;
`;

const CardMore = styled.div`
  font-size: 18px;
  color: #9f9f9f;
  width: 80px;
`;

const CardSection = ({ movie }) => {
  console.log("무비?", movie);
  return (
    <div>
      <CardAlign>
        <CardTitle>개봉 예정 영화</CardTitle>
        <CardMore>더보기</CardMore>
      </CardAlign>
      <CardAlign>
          {movie.results.map((item) => 
            <Cards item={item} />
          )}
        {/* <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/> */}
      </CardAlign>
    </div>
  );
};

export default CardSection;
