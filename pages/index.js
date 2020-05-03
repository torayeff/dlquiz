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
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" />
      </Layout>
    );
  }
}

export default DeepLearningQuiz;