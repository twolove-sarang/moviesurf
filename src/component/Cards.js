import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border-radius: 20px;
  width: 250px;
  height: 400px;
  background-size: cover;
  margin: 4px 4px;
  cursor: pointer;
`;

const CardHover = styled.div`
  opacity: 0;
  &:hover {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-color:black;
    border-radius : 20px;
    animation : fadeInFromNone 0.3s ease-in;
  }

  @keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 0.8;
    }
}
`;

const CardTitle = styled.div`
  color: white;
  text-align: center;
  font-weight: 900;
  font-size: 30px;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;

      & div {
        margin: 3px;
        background-color: #2853a6;
        border-radius: 100px;
        padding: 5px;
        font-weight: 400;
        font-size: 12px;
      }
    `}

  ${(props) =>
    props.title &&
    css`
      padding: 30px;
      padding-top: 100px;
    `}
`;

const CardItem = styled.div`
  // margin-top:19px;
`;

const Cards = ({ item }) => {
  // console.log("메인 카드 아이템", item);
  const navigate = useNavigate();
  const gotoDetail = () => {
    navigate(`${item.id}`);
  };
  return (
    <div>
      <Card
        onClick={gotoDetail}
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}` +
            ")",
        }}
      >
        <CardHover>
          <CardTitle title>{item.title}</CardTitle>
          <CardTitle flex>
            {item.genre_ids.map((item) => (
              <CardItem>{item}</CardItem>
            ))}
          </CardTitle>
        </CardHover>
        {/* <CardTitle>{item.adult == true ? "adult" : "Under 18"}</CardTitle> */}
      </Card>
    </div>
  );
};

export default Cards;
