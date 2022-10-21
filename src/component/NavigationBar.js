import React from "react";
import Categorize from "../pages/Categorize";
import MovieSurf from "../pages/MovieSurf";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={goToHome=>navigate('/')}>MovieSurf</button>
      <button onClick={goToCategorize=>navigate('/categorize')}>categorize</button>
    </div>
  );
};

export default NavigationBar;
