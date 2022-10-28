import React from "react";
import styled, { css } from "styled-components";
import Banner from "./Banner";
import ScrollBar from "./styled/ScrollBar";

const BannerStyle = styled.div`
  width: 1290px;
  display: flexbox;
  justify-content: center;
  overflow: scroll;
`;

const BannerSection = ({ movie }) => {
  console.log("배너섹션", movie);
  return (
    <ScrollBar>
      <BannerStyle>
        {movie.results && movie.results.map((item) => (
          <Banner item={item} />
        ))}
      </BannerStyle>
    </ScrollBar>
  );
};

export default BannerSection;
