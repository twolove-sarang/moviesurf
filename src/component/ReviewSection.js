import React from "react";
import styled, { css } from "styled-components";

const ReviewStyle = styled.div`
  color: white;
`;

const ReviewSection = ({ review }) => {
  console.log("리뷰", review);
  return (
    <div>
      <ReviewStyle>
        {review.results.map((item) => (
          <div>{item.author}</div>
        ))}
      </ReviewStyle>
      <ReviewStyle>
        {review.results.map((item) => (
          <div>{item.content}</div>
        ))}
      </ReviewStyle>
    </div>
  );
};

export default ReviewSection;
