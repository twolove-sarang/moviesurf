import React from "react";
import styled, { css } from "styled-components";

const KeywordAlign = styled.div`
  display: flexbox;
  justify-content: center;
  flex-wrap: wrap;
`;

const KeywordStyle = styled.div`
  color: white;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    cursor: pointer;
  }

  ${(props) =>
    props.style &&
    css`
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 60px;
      padding: 20px;
      margin: 6px;
      font-weight: 800;
    `}

  ${(props) =>
    props.border &&
    css`
      border-bottom: 1px solid white;
      width: 100px;
    `}
`;

const KeywordTitle = styled.div`
  color: white;
  text-align: center;
  margin: 80px 0;
  font-size: 26px;
  font-weight: 100;
`;

const KeywordSection = ({ keyword }) => {
  return (
    <div>
      {keyword.keywords.length === 0 ? (
        ""
      ) : (
        <div>
          <KeywordTitle>Keyword</KeywordTitle>
          <KeywordAlign>
            {keyword.keywords.map((item, index) => (
              <KeywordStyle style>
                {item.name}
              </KeywordStyle>
            ))}
          </KeywordAlign>
        </div>
      )}
    </div>
  );
};

export default KeywordSection;
