import React from "react";

const Answers = (props) => {
  let correctAnswer = "";

  if (props.question.type === "text" || props.question.type === "number") {
    correctAnswer = props.question.correctAnswer
  } else if (props.question.type === "one_correct") {
    correctAnswer = props.question.answers[props.question.correctAnswer];
  } else if (props.question.type === "multi_correct") {
    props.question.correctAnswer.forEach(idx => {
      correctAnswer = correctAnswer + props.question.answers[idx] + "<br/>";
    });
  }

  return (
    <div className="alert alert-info">
      <p>Correct answer: </p>
      <div className="text-justify" dangerouslySetInnerHTML={{__html: correctAnswer}} />
      <div className="text-justify" dangerouslySetInnerHTML={{__html: props.question.answerComment}} />
    </div>
  );
};

export default Answers;