import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highScore }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p>High score{highScore}</p>
    </>
  );
};

export default FinishScreen;