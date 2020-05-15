import React from "react";
import Question from "./Question";

class Quiz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {"current_index": 0};
    this.updateUserAnswer = this.updateUserAnswer.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  updateUserAnswer(questionId, userAnswer) {
    console.log(questionId, userAnswer);
  }

  handleNavClick(event) {
    const val = parseInt(event.target.id);
    this.setState(state => ({
      current_index: state.current_index + val
    }));
    event.preventDefault();
  }

  render() {

    const question = this.props.questions[this.state.current_index];

    return (
      <div className="col-md-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
        <h2 className="text-center dlq-h2">Deep Learning Quiz</h2>
        <div className="border rounded shadow dlq-quiz-container">
          <h4 className="text-center">
            <b>Question</b>: {this.state.current_index + 1} / {this.props.questions.length}
          </h4>
          <Question
            key={question.id}
            question={question}
            userAnswer={[]}
            updateUserAnswer={this.updateUserAnswer}/>
          {
            this.state.current_index < this.props.questions.length - 1 ?
              <button className="btn btn-outline-primary btn-block text-center border rounded"
                      type="button"
                      onClick={this.handleNavClick} id="+1">
                Next question
              </button> : ""
          }
          {
            this.state.current_index > 0 ?
              <button className="btn btn-outline-primary btn-block text-center border rounded"
                      type="button"
                      onClick={this.handleNavClick} id="-1">
                Previous question
              </button>  : ""
          }
          <div className="clearfix"/>
        </div>
      </div>
    );
  }
}

export default Quiz;