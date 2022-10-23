import React from "react";
import styled, { css } from "styled-components";
import Carousel from "react-bootstrap/Carousel";

const BannerStyle = styled.div`
  width: 1400px;
  height: 70vh;
  border-radius: 30px;
  margin: 30px;
  // 이미지 사이즈 꽉차게..?
  position: relative;
  background-size: cover;
`;

const BannerAlign = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerText = styled.div`
  position: absolute;
  top: 450px;
  left: 130px;
  color: white;
  width: 450px;
`;

//배너(포스터이미지) 캐러셸 안에 보이게
//캐러셸 디자인, 페이지네이션
//글자가 사진 안으로 오게 하려면....?
//이미지랑 글자가 같이 움직이게 하기
const Banner = ({ movie }) => {
  console.log("movie", movie);
  return (
    <div>
      <BannerAlign>
        <BannerStyle
          image
          className="banner"
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
              ")",
          }}
        ></BannerStyle>
      </BannerAlign>
      <BannerText>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </BannerText>
    </div>
  );
};

export default Banner;
