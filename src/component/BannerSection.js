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
  overflow: auto;

  @media screen and (max-width: 768px) {
    margin-left: 30px;
  }

  &::-webkit-scrollbar {
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
`;
