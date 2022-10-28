import React from "react";
import styled, { css } from "styled-components";
import Banner from "./Banner";

const BannerStyle = styled.div`
  width: 1380px;
  display: flexbox;
  justify-content: center;
  overflow: scroll;

  &:before {
    width: 1300px;
    height: 1000px;
    background-color: black;
  }
`;

const BannerSection = ({ movie }) => {
  // console.log("배너섹션", movie);
  return (
    <BannerStyle>
      {movie.results.map((item) => (
        <Banner item={item} />
      ))}
    </BannerStyle>
  );
};

export default BannerSection;
