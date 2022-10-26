import React from "react";
import styled, { css } from "styled-components";

const Poster = styled.div`
  width: 270px;
  height: 400px;
  background-size: cover;
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
  }

  & div:first-child {
    font-size: 32px;
    font-weight: 800;
  }

  & div:nth-child(2n) {
    font-size: 22px;
  }
`;

const DetailPoster = ({ detail }) => {
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
        <div>{detail?.original_title}</div>
        <div>{detail?.overview}</div>
        <div>tagline</div>
        <div>{detail?.tagline}</div>
        <div>runtime</div>
        <div>{detail?.runtime} min</div>
        <div>budget</div>
        <div>{detail?.budget}</div>
      </DetailInfo>
    </DetailAlign>
  );
};

export default DetailPoster;
