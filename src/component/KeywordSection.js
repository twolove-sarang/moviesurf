import React from "react";
import styled, { css } from "styled-components";

const KeywordAlign = styled.div`
  display: flexbox;
`;

const KeywordStyle = styled.div`
  border: 2px solid white;
  border-radius: 30px;
  padding: 15px;
  margin : 2px;
  color: white;
  font-weight: 800;
`;

const KeywordSection = ({ keyword }) => {
  return (
    <KeywordAlign>
      {keyword.keywords.map((item, index) => (
        <KeywordStyle key={index}>{item.name}</KeywordStyle>
      ))}
    </KeywordAlign>
  );
};

export default KeywordSection;
