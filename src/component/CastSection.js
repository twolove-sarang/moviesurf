import React, { useEffect, useState } from "react";
import CastCard from "./CastCard";
import styled, { keyframes } from "styled-components";

const CastSection = ({ cast }) => {
  const [position,setPosition] = useState(0);
  const onscroll = () => {
    setPosition(window.scrollY)
    // console.log("여기?",window.scrollY)
  }

  useEffect(()=>{
    window.addEventListener("scroll",onscroll)
    return () => {
      window.removeEventListener("scroll",onscroll)
    }
  },[])

  return (
    <div>
      <CastStyle>CAST</CastStyle>
      <CastCardAnimation style={{opacity:(position-100)/500}}>
        <CastCardStyle>
          {cast.cast.map((item, index) => (
            <CastCard item={item} />
          ))}
        </CastCardStyle>
      </CastCardAnimation>
    </div>
  );
};



export default CastSection;

const CastCardFrame = keyframes`
// 0%{
//   opacity : 0;
//   transform : translateY(2em);
// }
// 100%{
//   opacity: 1;
//   transform : translateY(0);
// }
`;

const CastCardAnimation = styled.div`
  animation: ${CastCardFrame} 2s;
`;

const CastCardStyle = styled.div`
  width: 1290px;
  display: flexbox;
  overflow: scroll;
  margin-top: 80px;
`;

const CastStyle = styled.div`
  color: white;
  text-align: center;
  margin: 80px 0;
  font-size: 26px;
  font-weight: 100;
`;
