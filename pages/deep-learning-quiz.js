import React, {useState} from "react";
import fetch from "node-fetch";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import QuizResults from "../components/QuizResults";
import useSWR from "swr";

function DLQuiz() {
  const time = 5;
  const questionIds = [66, 3, 36, 88, 9];

  const [userResults, setUserResults] = useState([]);

  // fetch questions
  const reqBody = {
    questionIds: questionIds
  };
  const fetcher = url => fetch(url, {
    method: "post",
    body: JSON.stringify(reqBody),
    headers: {"Content-Type": "application/json"}
  }).then(res => res.json());
  const {data, error} = useSWR('/api/fetch-quiz', fetcher);

  // check quiz
  const getUserAnswers = (userAnswers) => {
    const reqBody = {
      questionIds: questionIds,
      userAnswers: userAnswers
    };

    fetch('/api/check-quiz', {
      method: "post",
      body: JSON.stringify(reqBody),
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json()).then(res => setUserResults(res));
  };

  let out;
  if (userResults.length > 0) {
    out = <QuizResults results={userResults}/>
  } else if (data) {
    out = <div className="row"><Quiz questions={data} time={time} getUserAnswers={getUserAnswers}/></div>
  } else if (error) {
    out = <h4 className="centered-info">Error!</h4>;
  } else {
    out = <h4 className="centered-info">Loading...</h4>;
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