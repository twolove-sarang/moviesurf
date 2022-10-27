import React from 'react'
import styled from "styled-components";

const RecommendCard = ({item}) => {
  const Card = styled.div`
  border-radius: 20px;
  width: 250px;
  height: 400px;
  background-size: cover;
  margin: 4px 4px;
  cursor : pointer;

`;
  return (
    <div>
      <div>{item.title}</div>
      <Card
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w500_and_h282_face/${item.poster_path}` +
              ")",
          }}
        ></Card>
    </div>
  )
}

export default RecommendCard