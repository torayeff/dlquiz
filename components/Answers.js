import React from "react";

const Answers = (props) => {
  let userFeedback;
  if (props.question.type === "text") {
    userFeedback = (
      <div>
        <b>Correct answer: </b>
        <div className="text-justify" dangerouslySetInnerHTML={{__html: props.question.correctAnswer}}/>
        <div className="text-justify" dangerouslySetInnerHTML={{__html: props.question.answerComment}}/>
      </div>
    );
  } else {
    if (props.question.correct) {
      userFeedback = (
        <div>
          <p className="correct-answer">Your answer is correct!</p>
          <div className="text-justify" dangerouslySetInnerHTML={{__html: props.question.answerComment}}/>
        </div>
      );
    } else {
      let correctAnswer = "";
      if (props.question.type === "number") {
        correctAnswer += props.question.correctAnswer
      } else if (props.question.type === "one_correct") {
        correctAnswer += props.question.answers[props.question.correctAnswer];
      } else if (props.question.type === "multi_correct") {
        props.question.correctAnswer.forEach(idx => {
          correctAnswer = correctAnswer + props.question.answers[idx] + "<br/>";
        });
      }
      userFeedback = (
        <div>
          <p className="wrong-answer">Your answer is wrong!</p>
          <b>Correct answer:</b>
          <div className="text-justify" dangerouslySetInnerHTML={{__html: correctAnswer}}/>
          <div className="text-justify" dangerouslySetInnerHTML={{__html: props.question.answerComment}}/>
        </div>
      );
    }
  }

  return (
    <div className="alert">
      {userFeedback}
    </div>
  );
};

export default Answers;