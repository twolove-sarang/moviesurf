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
      <CardAlign>
        <CardTitle>{name}</CardTitle>
        <CardMore>
          <CardMore more onClick={(movie)=>gotoDetailPage(movie)}>
            더보기
          </CardMore>
          {/* <CardArrow>&lt;</CardArrow>
          <CardArrow>&gt;</CardArrow> */}
        </CardMore>
      </CardAlign>
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
  justify-content:space-between;
  overflow: scroll;
  @media screen and (max-width: 768px) {
    width : 740px;
    margin-left : 30px;
  }
`;

const CardTitle = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 700;
  width: 1140px;
  text-align: left;
  margin: 10px;
  padding-top : 10px;

  @media screen and (max-width: 768px) {
    font-size :12px;
    width : 580px;
  }
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

      @media screen and (max-width: 768px) {
        font-size :12px;
        margin-right : 40px;
        margin-bottom : 10px;
      }
    `}
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
    font-size :12px;
  }

  &:hover {
    background-color: #9f9f9f;
    color: #1f1f1f;
  }
`;
