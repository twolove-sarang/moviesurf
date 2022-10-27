import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border-radius: 20px;
  width: 250px;
  height: 400px;
  background-size: cover;
  margin: 4px 4px;
  cursor : pointer;

`;

const Cards = ({ item }) => {
  const navigate = useNavigate()
  const gotoDetail = () => {
    navigate(`${item.id}`)
  }
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
