import React from "react";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";

import questions from "../data/dlquiz";

class DeepLearningQuiz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout title={"Deep Learning Quiz"}>
        <div className="dlq-wrapper">
          <div className="container">
            <div className="row">
              <Quiz questions={questions}/>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default DeepLearningQuiz;