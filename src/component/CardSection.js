import React from "react";
import styled, { css } from "styled-components";
import Cards from "./Cards";

//더보기 정렬
const CardAlign = styled.div`
  display: flexbox;
  overflow: scroll;
`;

const CardTitle = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 700;
  width: 1140px;
  text-align: left;
  margin: 40px auto 10px;
`;

const CardMore = styled.div`
  font-size: 18px;
  color: #9f9f9f;
  display: flex;
  align-items: center;

  ${(props) =>
    props.more &&
    css`
      margin-top: 24px;
      margin-left: 15px;
      margin-right: 5px;
      cursor: pointer;
    `}
`;

const CardArrow = styled.div`
  width: 36px;
  height: 20px;
  background-color: white;
  border-radius: 50px;
  margin-top: 24px;
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    animation: fadeInFromNone 0.3s ease-in;
  }

  @keyframes fadeInFromNone {
    0% {
      opacity: 0;
      display: none;
    }
    100% {
      opacity: 0.5;
      display: block;
    }
  }
`;

// card를 5개씩 보여주고 싶어!
const CardSection = ({ movie, name }) => {
  // console.log("무비?", movie);
  return (
    <div>
      <CardAlign>
        <CardTitle>{name}</CardTitle>
        <CardMore>
          <CardMore more>더보기</CardMore>
          <CardArrow>back</CardArrow>
          <CardArrow>go</CardArrow>
        </CardMore>
      </CardAlign>
      <CardAlign>
        {/* <CardArrow></CardArrow> */}
        {movie.results.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
        {/* <CardArrow></CardArrow> */}
      </CardAlign>
    </div>
  );
};

export default CardSection;
