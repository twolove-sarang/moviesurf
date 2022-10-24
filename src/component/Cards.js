import React from "react";
import styled, { css } from "styled-components";

// const Card = styled.div`
//   // border: 1px solid black;
//   border-radius: 20px;
//   width: 250px;
//   height: 400px;
//   background-size: cover;
//   margin: 4px 4px;
// `;

const Cards = ({ item }) => {
  console.log("item?", item);
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" +
            `	https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}` +
            ")",
        }}
      ></div>
    </div>
  );
};

export default Cards;
