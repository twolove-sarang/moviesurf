import React from "react";
import styled, { css } from "styled-components";


// 내 정보로 바꾸기
const Footer = () => {
  const footerMenu = [
    "소개",
    "인재상",
    "포트폴리오 소개",
    "연락처",
    "작업일기",
  ];
  return (
    <div>
      <FooterNotice>공지사항</FooterNotice>
      <FooterList>
        {footerMenu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
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
  display: flex;
  padding: 10px;
  list-style: none;
  color: #9f9f9f;
  font-size: 14px;

  & li {
    margin: 10px;
    cursor: pointer;
  }
`;
