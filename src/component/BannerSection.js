import React from "react";
import styled from "styled-components";
import Banner from "./Banner";

const BannerStyle = styled.div`
  width: 1290px;
  display: flexbox;
  justify-content: center;
  overflow: scroll;
`;

const BannerSection = ({ movie }) => {
  console.log("배너섹션", movie);
  return (
    <div>
      <BannerStyle>
        {movie.results && movie.results.map((item) => (
          <Banner item={item} />
        ))}
      </BannerStyle>
    </div>
  );
};

export default BannerSection;
