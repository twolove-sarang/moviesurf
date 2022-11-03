import React from "react";
import styled, { css } from "styled-components";

const ReviewStyle = styled.div`
  color: white;
  text-align: center;
  font-size: 14px;

  ${(props) =>
    props.title &&
    css`
      font-size: 18px;
      font-weight: 900;
    `}

  ${(props) =>
    props.updated &&
    css`
      color: grey;
      margin: 14px 0;
      font-size: 10px;
    `}

    ${(props) =>
    props.text &&
    css`
      padding: 50px;
    `}


  ${(props) =>
    props.main &&
    css`
      margin: 90px 0 20px 0;
      font-size: 26px;
      font-weight: 100;
    `}

    ${(props) =>
    props.border &&
    css`
      border-bottom: 1px solid white;
      width: 150px;
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
    `}
`;

const ReviewSection = ({ review }) => {
  return (
    <div>
      {review.results.length == 0 ? (
        ""
      ) : (
        <div>
          <ReviewStyle main>Review</ReviewStyle>
          <ReviewStyle>
            {review.results.map((item, index) => (
              <ReviewStyle text>
                <ReviewStyle title>
                  {item.author} <br />
                </ReviewStyle>
                <ReviewStyle updated>
                  {item.updated_at} <br />
                </ReviewStyle>
                <ReviewStyle>
                  {item.content} <br />
                </ReviewStyle>
                <ReviewStyle border></ReviewStyle>
              </ReviewStyle>
            ))}
          </ReviewStyle>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
