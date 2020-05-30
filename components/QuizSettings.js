import React, { useState } from "react";

const QuizSettings = (props) => {

  const [questionsCount, setQuestionsCount] = useState(10);
  const [quizTime, setQuizTime] = useState(10 * 60);

  const onCountChange = (event) => setQuestionsCount(event.target.value);
  const onTimeChange = (event) => setQuizTime(event.target.value);
  const onClick = (event) => {
    event.preventDefault();
    props.startQuiz(questionsCount, quizTime);
  };

  return (
    <div className="row">
      <div className="col-md-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
        <h2 className="text-center dlq-h2">Quiz Settings</h2>
        <div className="border rounded shadow quiz-container">
          <form>
            <div className="answer-form">
              <label>Number of questions:</label>
              <input type="number" className="width-100"
                     name="quiz-count" value={questionsCount} onChange={onCountChange}/>
            </div>

            <div className="answer-form">
              <label>Time in seconds (type -1 for unlimited time):</label>
              <input type="number" className="width-100"
                     name="quiz-time" value={quizTime} onChange={onTimeChange}/>
            </div>

            <button
              className="btn btn-primary btn-block text-center border rounded"
              type="button"
              onClick={onClick}>
              Start quiz
            </button>
          </form>
        </div>
      </div>
    </div>
  )
    ;
};

export default QuizSettings;