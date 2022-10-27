import React from "react";
import RecommendCard from "./RecommendCard";

const RecommendSection = ({ recommend }) => {
  
  return (
    <div>
      {recommend.results.map((item) => (
        <RecommendCard item={item} />
      ))}
    </div>
  );
};

export default RecommendSection;
