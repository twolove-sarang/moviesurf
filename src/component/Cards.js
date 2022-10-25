import React from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const [id, setId] = useSearchParams();
  const gotoDetail = () => {
    // 내가 어떤걸 눌렀는지 어떻게 알아? id가 필요하겠군!
    navigate('/${id}')
  };
  // console.log("item?", item);
  return (
    <div>
      <Card
        // 클릭하면 디테일 페이지로 이동!
        onClick={() => gotoDetail()}
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
