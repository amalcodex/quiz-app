import React from "react";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  const check = index < numQuestions - 1;
  const checkTwo = index === numQuestions - 1;
  if (answer === null) return null;
  if (check)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (checkTwo)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
};

export default NextButton;
