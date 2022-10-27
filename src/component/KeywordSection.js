import React from "react";
import styled, { css } from "styled-components";

const KeywordAlign = styled.div`
  display: flexbox;
  justify-content : center;
  overflow: scroll;
  flex-wrap: wrap;
`;

const KeywordStyle = styled.div`
  color: white;

  ${(props) =>
    props.style &&
    css`
      // border: 2px solid white;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 60px;
      padding: 20px;
      margin: 6px;
      font-weight: 800;
    `}

  ${(props) =>
    props.main &&
    css`
      color: white;
      text-align: center;
      margin: 80px 0;
      font-size: 26px;
      font-weight: 100;
    `}
`;

const KeywordSection = ({ keyword }) => {
  return (
    <div>
      <KeywordStyle main>Keyword</KeywordStyle>
      {keyword.keywords ? (
        <KeywordAlign>
          {keyword.keywords.map((item, index) => (
            <KeywordStyle style key={index}>
              {item.name}
            </KeywordStyle>
          ))}
        </KeywordAlign>
      ) : (
        (<KeywordStyle>🫥</KeywordStyle>)
      )}
    </div>
  );
};

export default KeywordSection;
