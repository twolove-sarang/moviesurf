import React from "react";
import CastCard from "./CastCard";
import styled, { css } from "styled-components";

const CastCardStyle = styled.div`
  width: 1290px;
  display : flexbox;
  overflow : scroll;
  margin-top : 80px;
`;

const CastSection = ({ cast }) => {
  return (
    <div>
      <CastCardStyle>
        {cast.cast.map((item, index) => (
          <CastCard item={item} key={index} />
        ))}
      </CastCardStyle>
    </div>
  );
};

export default CastSection;
