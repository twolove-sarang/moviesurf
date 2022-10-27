import React from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  border-radius: 20px;
  width: 100px;
  height: 120px;
  background-size: cover;
  margin: 4px 4px;
  cursor : pointer;
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


