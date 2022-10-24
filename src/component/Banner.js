import React from "react";
import styled, { css } from "styled-components";

const BannerStyle = styled.div`
  width: 1290px;
  height: 600px;
  border-radius: 30px;
  margin: 30px;
  background-size: cover;
`;

const BannerAlign = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const BannerText = styled.div`
  width: 450px;
  color: white;
  position: absolute;
  top: 350px;
  left: 100px;
`;

//배너(포스터이미지) 캐러셸 안에 보이게
//캐러셸 디자인, 페이지네이션
//글자가 사진 안으로 오게 하려면....?
//이미지랑 글자가 같이 움직이게 하기
//전체 width 고정
const Banner = ({ movie }) => {
  console.log("movie", movie);
  return (
    <div>
      <BannerAlign>
        <BannerStyle
          image
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}` +
              ")",
          }}
        ></BannerStyle>
        <BannerText>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </BannerText>
      </BannerAlign>
    </div>
  );
};

export default Banner;
