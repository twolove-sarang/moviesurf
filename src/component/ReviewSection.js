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
        {review.results.map((item,index) => (
          <p key={index}>id: {item.author} -{item.updated_at} {item.content} <br/></p>
        ))}
      </ReviewStyle>
    </div>
  );
};

export default ReviewSection;
