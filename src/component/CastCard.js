import React from "react";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

const CastCard = ({ item }) => {
  return (
    <CastCardWidth>
      {item.profile_path ? (
        <Card
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w276_and_h350_face/${item.profile_path}` +
              ")",
          }}
        >
          <CardAlign>
            <div>
              <CardStyle>
                캐릭터
                <br />
                Character
              </CardStyle>
              <CardCharacter>{item.character}</CardCharacter>
            </div>
            <div>
              <CardStyle>
                배우
                <br />
                Actor
              </CardStyle>
              <CardCharacter>{item.original_name}</CardCharacter>
            </div>
          </CardAlign>
        </Card>
      ) : (
        <div>
          <Card>
            <Card noneImage>이미지가 없습니다.</Card>
            <CardAlign>
              <div>
                <CardStyle>
                  캐릭터
                  <br />
                  Character
                </CardStyle>
                <CardCharacter>{item.character}</CardCharacter>
              </div>
              <div>
                <CardStyle>
                  배우
                  <br />
                  Actor
                </CardStyle>
                <CardCharacter>{item.original_name}</CardCharacter>
              </div>
            </CardAlign>
          </Card>
        </div>
      )}
    </CastCardWidth>
  );
};

export default CastCard;

const CastCardWidth = styled.div`
  @media screen and (max-width: 768px) {
    overflow: hidden;
  }
`;

const Card = styled.div`
  width: 310px;
  height: 400px;
  background-size: cover;
  position: relative;

  ${(props) =>
    props.noneImage &&
    css`
      height: 20px;
      position: absolute;
      text-align: center;
      color: white;
      font-size: 14px;
      margin-top: 175px;
    `}

  @media screen and (max-width:768px) {
    width: 230px;
    height: 300px;
    overflow: hidden;
  }
`;

const CardCharacter = styled.div`
  color: white;
  font-size: 22px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;

const CardStyle = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 800;
  text-align: center;
`;

const CardAlign = styled.div`
  display: flex;
  justify-content: left;
  opacity: 0;
  height: 100%;

  & div {
    padding: 10px;
    margin-top: 30px;

    @media screen and (max-width: 768px) {
      padding: 10px;
    }
  }

  &:hover {
    width: 310px;
    height: 400px;
    background: black;
    opacity: 0.8;

    @media screen and (max-width: 768px) {
      width: 230px;
      height: 300px;
    }
  }
`;
