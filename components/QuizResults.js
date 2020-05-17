import React, {useState} from "react";
import Question from "./Question";

const QuizResults = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavClick = (event) => {
    event.preventDefault();
    setCurrentIndex(currentIndex + parseInt(event.target.id));
  };

  const result = props.results[currentIndex];

  return (
    <div className="col-md-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
      <h2 className="text-center dlq-h2">Quiz Results</h2>
      <div className="border rounded shadow quiz-container">
        <h4 className="text-center">
          <b>Question</b>: {currentIndex + 1} / {props.results.length}
        </h4>
        <Question
          key={result.id}
          question={result}
          userAnswer={result.userAnswer}
          updateUserAnswers={() => {}}
          editable={false}/>
        {
          currentIndex < props.results.length - 1 ?
            <button className="btn btn-outline-primary btn-block text-center border rounded"
                    type="button"
                    onClick={handleNavClick} id="+1">
              Next question
            </button> : ""
        }
        {
          currentIndex > 0 ?
            <button className="btn btn-outline-primary btn-block text-center border rounded"
                    type="button"
                    onClick={handleNavClick} id="-1">
              Previous question
            </button> : ""
        }
        <div className="clearfix"/>
      </div>
    </div>
  );

};

export default QuizResults;