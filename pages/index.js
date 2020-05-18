import React, {useState} from "react";
import fetch from "node-fetch";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import QuizResults from "../components/QuizResults";
import QuizSettings from "../components/QuizSettings";

function DLQuiz() {
  const [quizStart, setQuizStart] = useState(false);
  const [quizTime, setQuizTime] = useState(-1);
  const [questions, setQuestions] = useState([]);
  const [userResults, setUserResults] = useState([]);

  // fetch quiz
  const getQuestions = (questionsCount) => {
    const reqBody = {
      questionsCount: questionsCount,
    };

    fetch('/api/fetch-quiz', {
      method: "post",
      body: JSON.stringify(reqBody),
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json()).then(res => setQuestions(res));
  };

  // check quiz
  const getUserAnswers = (userAnswers) => {
    const reqBody = {
      questionsIds: questions.map(q => q.id),
      userAnswers: userAnswers
    };

    fetch('/api/check-quiz', {
      method: "post",
      body: JSON.stringify(reqBody),
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json()).then(res => setUserResults(res));
  };

  // start quiz
  const startQuiz = (questionsCount, quizTime) => {
    getQuestions(questionsCount);
    setQuizTime(quizTime);
    setQuizStart(true);
  };

  let out;
  if (quizStart) {
    if (userResults.length > 0) {
      out = <QuizResults results={userResults}/>
    } else if (questions.length > 0) {
      out = (
        <div className="row">
          <Quiz questions={questions}
                time={quizTime}
                getUserAnswers={getUserAnswers}/>
        </div>
      );
    } else {
      out = (
        <h4 className="centered-info">Loading...</h4>
      );
    }
  } else {
    out = (
      <QuizSettings startQuiz={startQuiz}/>
    );
  }

  return (
    <Layout title={"Deep Learning Quiz"}>
      <div className="wrapper">
        <div className="container">
          {out}
        </div>
      </div>
    </Layout>
  );
}

export default DLQuiz;