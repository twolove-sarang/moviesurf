import React from "react";
import RecommendCard from "./RecommendCard";
import styled, { css } from "styled-components";

const RecommendStyle = styled.div`
  display: flex;
  overflow: scroll;
`;

const RecommendTitle = styled.div`
  ${(props) =>
    props.main &&
    css`
      color : white;
      text-align : center;
      margin: 80px 0;
      font-size: 26px;
      font-weight: 100;
    `}
`;
const RecommendSection = ({ recommend }) => {
  return (
    <div>
      <RecommendTitle main>추천영화</RecommendTitle>
      <RecommendStyle>
        {recommend.results.map((item) => (
          <RecommendCard item={item} />
        ))}
      </RecommendStyle>
    </div>
  );
};

export default RecommendSection;
