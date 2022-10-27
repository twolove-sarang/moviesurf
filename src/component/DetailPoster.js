import React from "react";
import styled, { css } from "styled-components";

const Poster = styled.div`
  width: 270px;
  height: 400px;
  background-size: cover;
  border-radius: 10px;
`;

const DetailAlign = styled.div`
  display: flexbox;
  justify-content: center;
  align-item: center;
`;

const DetailInfo = styled.div`
  padding: 30px;

  & div {
    color: white;
    padding: 3px;
    width: 800px;
  }

  // & div:first-child {
  //   font-size: 32px;
  //   font-weight: 800;
  // }

  // & div:nth-child(2n) {
  //   font-size: 22px;
  // }
`;
const DetailPoster = ({ detail }) => {
  console.log("디테일", detail);
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
      <DetailInfo>
        <div>{detail?.title}</div>
        <div>{detail?.tagline}</div>
        <div>{detail?.release_date}</div>
        <div>미리 보기</div>
        <div>{detail?.overview}</div>
        <div>상영시간</div>
        <div>{detail?.runtime} min</div>
        <div>예산</div>
        <div>{detail?.budget}</div>
        <div>
          {detail?.genres.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
        <div>
          {detail?.spoken_languages.map((item) => (
            <div>{item.english_name}</div>
          ))}
        </div>
      </DetailInfo>
    </DetailAlign>
  );
};

export default DetailPoster;
