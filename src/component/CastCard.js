import React from "react";
import styled, { css } from "styled-components";



const CastCard = ({ item }) => {
  // console.log("castitem", item);
  return (
    <div>
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
    </div>
  );
};

export default CastCard;


const Card = styled.div`
  width: 310px;
  height: 400px;
  background-size: cover;
`;

const CardCharacter = styled.div`
  color: white;
  font-size: 22px;
  text-align: center;
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

  & div {
    padding: 20px;
    margin-top: 30px;
  }

  &:hover {
    width: 310px;
    height: 400px;
    background: black;
    opacity: 0.8;
  }
`;