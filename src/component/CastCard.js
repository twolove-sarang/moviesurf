import React from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  width: 310px;
  height: 400px;
  background-size: cover;
`;


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
      ></Card>
      <div>{item.character}</div>
      <div>{item.original_name}</div>
    </div>
  );
};

export default CastCard;


