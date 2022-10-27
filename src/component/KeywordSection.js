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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    cursor : pointer;
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
    props.main &&
    css`
      color: white;
      text-align: center;
      margin: 80px 0;
      font-size: 26px;
      font-weight: 100;
    `}

    ${(props) =>
    props.border &&
    css`
      border-bottom: 1px solid white;
      width: 100px;
    `}
`;

const KeywordSection = ({ keyword }) => {
  console.log("keyword", keyword);
  return (
    <div>
      {keyword.keywords.length == 0 ? (
        ""
      ) : (
        <div>
          <KeywordStyle main>Keyword</KeywordStyle>
          <KeywordAlign>
            {keyword.keywords.map((item, index) => (
              <KeywordStyle style key={index}>
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
