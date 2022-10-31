import React from "react";
import styled from "styled-components";
import Banner from "./Banner";

const BannerSection = ({ movie }) => {
  return (
    <div>
      <BannerStyle>
        {movie.results && movie.results.map((item) => <Banner item={item} />)}
      </BannerStyle>
    </div>
  );
};

export default BannerSection;

const BannerStyle = styled.div`
  width: 1290px;
  display: flexbox;
  justify-content: center;
  overflow: scroll;

  @media screen and (max-width: 768px) {
    margin-left: 30px;
  }
`;
