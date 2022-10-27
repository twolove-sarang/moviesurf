import React from "react";
import CastCard from "./CastCard";
import styled, { css } from "styled-components";

const CastCardStyle = styled.div`
  width: 400px;
  height: 200px;
  display : flexbox;
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
