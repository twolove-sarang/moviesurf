import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { keyframes } from "styled-components";

const DetailPoster = ({ detail }) => {
  const [adult, setAdult] = useState(false);
  return (
    <DetailAlign>
      <Poster
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail?.poster_path}` +
            ")",
        }}
      />
      <DetailInfoWidth>
          <DetailText tagline>{detail?.tagline}</DetailText>
        <PosterAnimation>
          <DetailText title className="Cafe24Ohsquare">
            {detail?.title}
          </DetailText>
        </PosterAnimation>

        <DetailText tagline>줄거리</DetailText>
        <DetailText>{detail?.overview}</DetailText>

        <DetailAlign detail>
          <div>
            <DetailText tagline>개봉일자</DetailText>
            <DetailText>{detail?.release_date}</DetailText>
          </div>

          <div>
            <DetailText tagline>상영시간</DetailText>
            <DetailText>{detail?.runtime}분</DetailText>
          </div>

          <div>
            <DetailText tagline>예산</DetailText>
            <DetailText>
              {detail?.budget == "0" ? "-" : `${detail.budget}`}
            </DetailText>
          </div>

          <div>
            <DetailText tagline>청불</DetailText>
            <DetailText>
              {detail?.adult == true ? "only adult" : "-"}
            </DetailText>
          </div>

          <div>
            <DetailText tagline>장르</DetailText>
            <DetailText>
              {detail.genres &&
                detail?.genres.map((item, index) => <div>{item.name}</div>)}
            </DetailText>
          </div>
          <div>
            <DetailText tagline>언어</DetailText>
            <DetailText>
              {detail.spoken_languages &&
                detail?.spoken_languages.map((item, index) => (
                  <div>{item.english_name}</div>
                ))}
            </DetailText>
          </div>
        </DetailAlign>
      </DetailInfoWidth>
    </DetailAlign>
  );
};

export default DetailPoster;

const PosterFrames = keyframes`
0%{
  opacity : 0;
  transform : translateX(2em);
}
100%{
  opacity: 1;
  transform : translateX(0);
}
`;

const PosterAnimation = styled.div`
  animation: ${PosterFrames} 2s;
`;

const Poster = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 30px;
  background-size: cover;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const DetailInfoWidth = styled.div`
  width: 600px;
  margin-left: 50px;
`;
const DetailAlign = styled.div`
  display: flexbox;
  justify-content: center;
  margin-top: 60px;

  ${(props) =>
    props.detail &&
    css`
      justify-content: space-between;
      margin-top: 15px;
    `}
`;

const DetailText = styled.div`
  color: white;
  font-size: 14px;

  ${(props) =>
    props.title &&
    css`
      font-size: 100px;
      margin-top: 12px;
    `}

  ${(props) =>
    props.tagline &&
    css`
      margin-top: 20px;
      font-size: 16px;
      font-weight: 800;
    `}
`;
