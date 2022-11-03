import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

//클릭한 메뉴 보이게하기
//인풋 오른쪽 끝으로 붙이기
const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <Navigation>
      <Navigation logo onClick={(goToHome) => navigate("/")}>
        MOVIE SURF🏄‍♂️
      </Navigation>
      <NavigationButton onClick={(goToHome) => navigate("/")}>
        홈
      </NavigationButton>
      <NavigationButton onClick={(goToCategorize) => navigate("/categorize")}>
        카테고리
      </NavigationButton>
      <NavigationInput type="text" placeholder="baby, comming soon😉" />
    </Navigation>
  );
};

export default NavigationBar;

const Navigation = styled.div`
  display: flex;
  background-color: #1f1f1f;

  ${(props) =>
    props.logo &&
    css`
      font-weight: 800;
      font-size: 20px;
      padding: 30px;
      color: white;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    `}

  @media screen and (max-width:768px) {
    width: 768px;
    padding-top :35px;
  }
`;

const NavigationButton = styled.button`
  border: none;
  background-color: #1f1f1f;
  font-size: 20px;
  color: white;
  cursor: pointer;
  margin: 0px 15px;

  &:active {
    font-weight: 800;
  }

  @media screen and (max-width: 768px) {
    width : 150px;
    font-size: 12px;
  }
`;

const NavigationInput = styled.input`
  background-color: #1f1f1f;
  height: 2em;
  margin: 30px;
  border: none;
  border-bottom: 2px solid white;
`;
