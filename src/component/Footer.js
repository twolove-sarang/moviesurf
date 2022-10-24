import React from "react";

const Footer = () => {
  const footerMenu = [
    "회사소개",
    "인재채용",
    "서비스 소개",
    "이용양관",
    "개인정보 처리방침",
    "고객센터"
  ];
  return (
    <div>
      <div>공지사항</div>
      <div>
        {footerMenu.map((item,index) => 
          <li key={index}>{item}</li>
        )}
      </div>
    </div>
  );
};

export default Footer;
