import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TypeIt from "typeit-react";

const Banner = ({ item }) => {
  const navigate = useNavigate();
  const gotoDetail = () => {
    navigate(`${item.id}`);
  };
  return (
    <BannerAlign>
      <BannerStyle
        // image
        onClick={gotoDetail}
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}` +
            ")",
        }}
      >
        <BannerText>
          <TypeIt
            options={{
              speed: 100,
              waitUntilVisible: true,
              
            }}
          >
            <h1 className="Cafe24Ohsquare">{item.title}</h1>
          </TypeIt>
            <p>{item.overview}</p>
        </BannerText>
      </BannerStyle>
    </BannerAlign>
  );
};

export default Banner;

//배너 슬라이드 만들기

const BannerStyle = styled.div`
  width: 1290px;
  height: 600px;
  border-radius: 30px;
  margin: 30px 10px;
  background-size: cover;
  cursor: pointer;
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
  top: 200px;
  left: 100px;

  .Cafe24Ohsquare {
    font-size: 50px;
  }
`;
