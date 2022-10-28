import React from "react";
import CastCard from "./CastCard";
import styled from "styled-components";

const CastSection = ({ cast }) => {
  return (
    <div>
      <CastStyle>CAST</CastStyle>
      <CastCardStyle>
        {cast.cast.map((item, index) => (
          <CastCard item={item} key={index} />
        ))}
      </CastCardStyle>
    </div>
  );
};

export default CastSection;

const CastCardStyle = styled.div`
  width: 1290px;
  display: flexbox;
  overflow: scroll;
  margin-top: 80px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  $::-webkit-scrollbar {
    display: none;
  }
`;

const CastStyle = styled.div`
  color: white;
  text-align: center;
  margin: 80px 0;
  font-size: 26px;
  font-weight: 100;
`;
