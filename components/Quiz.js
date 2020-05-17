import React, {useState, useEffect} from "react";
import Timer from "./Timer";
import Question from "./Question";

const Quiz = (props) => {

  const [editable, setEditable] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(() => {
    let uA = {};
    props.questions.forEach(q => uA[q.id] = []);
    return uA;
  });

  const updateUserAnswers = (questionId, userAnswer) => {
    setUserAnswers(userAnswers => {
      // ensure deep copy with hooks
      let uAs = JSON.parse(JSON.stringify(userAnswers));
      uAs[questionId]= userAnswer;
      return uAs;
    });
  };

  const submitUserAnswers = () => {
    props.getUserAnswers(userAnswers);
  };

  const handleNavClick = (event) => {
    event.preventDefault();
    setCurrentIndex(currentIndex + parseInt(event.target.id));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const yes = confirm("Do you really want to submit the quiz? This will submit all your answers.");
    if (yes) {
      submitUserAnswers();
    }
  };

  const onTimerEnd = () => {
    setEditable(!editable);
    submitUserAnswers();
  };

  const question = props.questions[currentIndex];

  return (
    <div className="col-md-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
      <h2 className="text-center dlq-h2">Deep Learning Quiz</h2>
      {props.time > 0 ? <Timer time={props.time} onTimerEnd={onTimerEnd}/> : ""}
      <div className="border rounded shadow quiz-container">
        <h4 className="text-center">
          <b>Question</b>: {currentIndex + 1} / {props.questions.length}
        </h4>
        <Question
          key={question.id}
          question={question}
          userAnswer={userAnswers[question.id]}
          updateUserAnswers={updateUserAnswers}
          editable={editable}/>
        {
          currentIndex < props.questions.length - 1 ?
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
        <button
          className="btn btn-primary btn-block text-center border rounded"
          type="button"
          onClick={onSubmit}>
          Submit quiz
        </button>
        <div className="clearfix"/>
      </div>
    </div>
  );

};

export default Quiz;