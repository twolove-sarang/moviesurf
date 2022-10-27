import React from "react";
import CastCard from "./CastCard";
import styled, { css } from "styled-components";

const CastCardStyle = styled.div`
  width: 1290px;
  display : flexbox;
  overflow : scroll;
  margin-top : 80px;
`;

const CastStyle = styled.div`
color: white;
text-align: center;
margin: 80px 0;
font-size: 26px;
font-weight: 100;
`

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
