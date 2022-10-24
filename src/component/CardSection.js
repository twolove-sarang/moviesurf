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
  display: flexbox;
  overflow: scroll;
`;

const CardTitle = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 700;
  width: 1240px;
  text-align: left;
  margin: 40px auto 10px;
`;

const CardMore = styled.div`
  font-size: 18px;
  color: #9f9f9f;
  // width: 50px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  cursor : pointer;
`;

// card를 5개씩 보여주고 싶어!
const CardSection = ({ movie, name }) => {
  // console.log("무비?", movie);
  return (
    <div>
      <CardAlign>
        <CardTitle>{name}</CardTitle>
        <CardMore>더보기</CardMore>
      </CardAlign>
      <CardAlign>
        {movie.results.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
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
