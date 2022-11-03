import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";
import Cards from "./Cards";

// card를 5개씩 보여주고 싶어!
const CardSection = ({ movie, name }) => {
  const navigate = useNavigate();
  // console.log("무비무비",movie)
  const gotoDetailPage = () => {
    navigate("/categorize");
  };
  return (
    <div>
      <CardMain>
        <CardTitle>{name}</CardTitle>
        <CardMore onClick={(movie) => gotoDetailPage(movie)}>더보기</CardMore>
        {/* <CardArrow>&lt;</CardArrow>
          <CardArrow>&gt;</CardArrow> */}
      </CardMain>
      <CardAlign>
        {movie.results &&
          movie.results.map((item, index) => (
            <CardKeyframes>
              <Cards key={index} item={item} />
            </CardKeyframes>
          ))}
      </CardAlign>
    </div>
  );
};

export default CardSection;

//더보기 정렬

const alignFade = keyframes`
  0%{
    opacity : 0;
    transform : translateY(2em);
  }
  100%{
    opacity: 1;
    transform : translateY(0);
  }
`;

const CardKeyframes = styled.div`
  animation: ${alignFade} 1s;
`;

const CardAlign = styled.div`
  display: flexbox;
  justify-content: space-between;
  overflow: auto;
  // height: 450px;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: black;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-corner {
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    width: 740px;
    margin-left: 30px;
  }
`;

const CardMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const CardTitle = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 700;
  margin: 10px;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 580px;
  }
`;

const CardMore = styled.div`
  font-size: 18px;
  color: #f1f1f1;
  cursor: pointer;
  margin-top: 30px;
  margin-right: 10px;

  &:hover {
    font-weight: 800;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const CardArrow = styled.div`
  width: 26px;
  height: 20px;
  color: #9f9f9f;
  font-weight: 400;
  text-align: center;
  font-size: 15px;
  line-height: 16.5px;
  // border:1px solid #9f9f9f;
  border-radius: 50px;
  margin-top: 24px;
  margin-left: 5px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  &:hover {
    background-color: #9f9f9f;
    color: #1f1f1f;
  }
`;
