import React from "react";
import styled, { css } from "styled-components";

//배너 슬라이드 만들기

const BannerStyle = styled.div`
  width: 1290px;
  height: 600px;
  border-radius: 30px;
  margin: 30px 10px;
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

const Banner = ({ item }) => {
  // console.log("item", item);
  return (
      <BannerAlign>
        <BannerStyle
          // image
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}` +
              ")"
          }}
        >
          <BannerText>
            <h1 className="Cafe24Ohsquare">{item.title}</h1>
            <p>{item.overview}</p>
          </BannerText>
        </BannerStyle>
      </BannerAlign>
  );
};

export default Banner;
