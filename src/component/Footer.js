import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

// 내 정보로 바꾸기
const Footer = () => {
  return (
    <div>
      <FooterNotice>Introduce</FooterNotice>
      <FooterList>
        <FooterList mainFooter>
          <div>lovely, love-lee</div>
          <div>Junior FE developer(will be..)</div>
          <div>contact</div>
        </FooterList>
        <FooterList logo>
          <a href="https://github.com/twolove-sarang/moviesurf">
            <img width={30} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          </a>
          <a href="https://danzo999.blogspot.com/search/label/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4">
            <img width={30} src="https://logodownload.org/wp-content/uploads/2018/02/blogger-logo-icon.png" />
          </a>
        </FooterList>
        <FooterList diary>
          <div>This movieSearch portfolio made by Sa-Rang.</div>
          <div>2022.10.25~2022.10.31</div>
        </FooterList>
      </FooterList>
    </div>
  );
};

export default Footer;

const FooterNotice = styled.div`
  color: #9f9f9f;
  margin-top: 90px;
  border-bottom: 1px solid #4f4f4f;
  border-top: 1px solid #4f4f4f;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const FooterList = styled.div`
  justify-content: center;
  color: #9f9f9f;
  font-size: 14px;

  ${(props) =>
    props.mainFooter &&
    css`
      text-align: center;
      padding: 40px;
      margin: 10px;
      div:first-child {
        font-weight: 800;
        color: white;
        font-size: 25px;
        margin-bottom: 10px;
      }
      div:nth-child(3) {
        margin-top: 40px;
        font-weight: 700;
      }
    `}

  ${(props) =>
    props.logo &&
    css`
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      margin-top: -30px;
      &div {
        width: 30px;
      }
    `}

    ${(props) =>
    props.diary &&
    css`
      text-align: center;
      padding-top: 50px;
      padding-bottom: 50px;
      div:first-child {
        font-weight: 800;
        margin-bottom: 10px;
      }
    `}
`;
