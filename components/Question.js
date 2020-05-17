import React, { useEffect } from "react";
import renderMathInElement from "../modules/auto-render";

const Question = (props) => {
  useEffect(() => {
    renderMathInElement(document.getElementById("question"));
  });

  const onChange = (event) => {
    let userAnswer;

    if (props.question.type === "text") {
      userAnswer = event.target.value;
    } else if (props.question.type === "number") {
      userAnswer = parseFloat(event.target.value);
    } else if (props.question.type === "one_correct") {
      userAnswer = parseInt(event.target.value);
    } else if (props.question.type === "multi_correct") {
      userAnswer = document.querySelectorAll("input[type=checkbox]:checked");
      userAnswer = [...userAnswer].map(el => parseInt(el.value));
    }

    props.updateUserAnswers(props.question.id, userAnswer);
  };

  let answerForm;

  if (props.question.type === "text") {
    answerForm = (
      <div>
          <textarea
            id="answer"
            rows="5"
            onChange={onChange}
            value={props.userAnswer}
            disabled={!props.editable}/>
      </div>
    );
  } else if (props.question.type === "number") {
    answerForm = (
      <div>
        <input
          type="number"
          step="0.0001"
          placeholder="Answer up to 4 decimal places: 0.1234"
          onChange={onChange}
          value={props.userAnswer}
          disabled={!props.editable}/>
      </div>
    );
  } else if (props.question.type === "one_correct") {
    answerForm = props.question.answers.map((answer, index) =>
      <div className="form-check" key={props.question.id + "-" + index}>
        <input
          className="form-check-input"
          type="radio"
          id={props.question.id + "-" + index}
          name="answer"
          value={index}
          onChange={onChange}
          checked={parseInt(props.userAnswer) === index}
          disabled={!props.editable}/>
        <label className="form-check-label"
               htmlFor={props.question.id + "-" + index}>
          {answer}
        </label>
      </div>
    );
  } else if (props.question.type === "multi_correct") {
    answerForm = props.question.answers.map((answer, index) =>
      <div className="form-check" key={props.question.id + "-" + index}>
        <input
          className="form-check-input"
          type="checkbox"
          id={props.question.id + "-" + index}
          name="answer"
          value={index}
          onChange={onChange}
          checked={props.userAnswer.includes(index)}
          disabled={!props.editable}/>
        <label className="form-check-label"
               htmlFor={props.question.id + "-" + index}>
          {answer}
        </label>
      </div>
    );
  }

  return (
    <div id="question" className="question-container">
      <form id={props.question.id}>
        <div
          id="question-text"
          className="text-justify"
          dangerouslySetInnerHTML={{__html: props.question.text}}/>
        <div className="answer-form">{answerForm}</div>
        <small className="text-black-50"><i>Source: {props.question.source}</i></small>
        <br/>
        <br/>
      </form>
    </div>
  );
};

export default Question;