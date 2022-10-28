import React, { useState } from "react";
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
  // 메뉴 누르면 내용 보이게
  return (
    <div>
      <FooterNotice>공지사항</FooterNotice>
      <FooterList>
        {footerMenu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </FooterList>

      <FooterList> 이름 : 이사랑, 92년생 개발자 </FooterList>
      <FooterList>인재상 : 2년 6개월 주식회사 픽웰 디자인 팀장</FooterList>
      <FooterList>영화 내용 소개, 등장인물, 추천, 왜 만들게 되었는지 부족한 점은 무엇이였는지 아쉬운점까지 적어놓기 </FooterList>
      <FooterList>E : twolovelove2232@gmail.com</FooterList>
      <FooterList>블로그 이모티콘, 깃허브 이모티콘</FooterList>
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
