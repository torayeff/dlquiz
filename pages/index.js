import React, {useState} from "react";
import fetch from "node-fetch";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import questions from "../data/questions";
import QuizResults from "../components/QuizResults";

function Index() {
  let qs = [questions[1], questions[92-0], questions[92-3], questions[92-8], questions[92-9]];
  const time = -5;

  const [results, setResults] = useState([]);

  const getUserAnswers = (userAnswers) => {
    const reqBody = {
      userAnswers: userAnswers
    };

    fetch('/api/check-quiz', {
      method: "post",
      body: JSON.stringify(reqBody),
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json()).then(res => setResults(res));
  };

  return (
    <Layout title={"Deep Learning Quiz"}>
      <div className="wrapper">
        <div className="container">
          {results.length === 0 ?
            <div className="row">
              <Quiz questions={qs} time={time} getUserAnswers={getUserAnswers}/>
            </div>
            :
            <QuizResults results={results} />}
        </div>
      </div>
    </Layout>
  );
}

export default Index;