import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  // border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  height: 400px;
  background-size: cover;
  margin: 4px 4px;
  cursor : pointer;

  // &:hover{
  //   width:300px;
  //   // overflow : auto;
  }
`;

const Cards = ({ item }) => {
  const navigate = useNavigate()
  const gotoDetail = () => {
    navigate('/${id}')
  }
  // console.log("아이템?",item)

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
      ></Card>
    </div>
  );
};

export default Cards;
