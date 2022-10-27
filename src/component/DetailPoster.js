import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";

const Poster = styled.div`
  width: 270px;
  height: 400px;
  background-size: cover;
  // border-radius: 10px;
`;

const DetailAlign = styled.div`
  display: flexbox;
  justify-content: left;
`;

const DetailText = styled.div`
  color: white;

  ${(props) =>
    props.tagline &&
    css`
      font-weight: 700;
      font-size: 30px;
      color: white;
      width: 500px;
    `}

  ${(props) =>
    props.bluepoint &&
    css`
      font-weight: 700;
      font-size: 50px;
      color: blue;
    `}

  ${(props) =>
    props.overview &&
    css`
      width: 700px;
      margin-left: 50px;
    `}

    ${(props) =>
      props.overviewTitle &&
      css`
        width: 700px;
        margin-left: 50px;
        font-weight : 800;
      `}
`;

const DetailInfo = styled.div``;
const DetailPoster = ({ detail }) => {
  // console.log("디테일", detail);
  const [adult, setAdult] = useState(false);
  return (
    <div>
      <DetailText bluepoint>{detail?.title}</DetailText>
      <DetailAlign>
        <div>
          <DetailText tagline>{detail?.tagline}</DetailText>
          <Poster
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail?.poster_path}` +
                ")",
            }}
          />
        </div>
        <div>
          <DetailText overview>{detail?.overview}</DetailText>
          <DetailText overview>{detail?.adult == true ? "adult" : ""}</DetailText>
          <DetailText overview>{detail?.release_date}</DetailText>
          <DetailText overviewTitle>상영시간</DetailText>
          <DetailText overview>{detail?.runtime} min</DetailText>
          <DetailText overviewTitle>예산</DetailText>
          <DetailText overview>{detail?.budget}</DetailText>
          <DetailText overview>
            {detail?.genres.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </DetailText>
          <DetailText overviewTitle>언어</DetailText>
          <DetailText overview>
            {detail?.spoken_languages.map((item, index) => (
              <div key={index}>{item.english_name}</div>
            ))}
          </DetailText>
        </div>
      </DetailAlign>
    </div>
  );
};

export default DetailPoster;
