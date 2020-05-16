import React from "react";
import Router from 'next/router'
import Question from "./Question";
import Timer from "./Timer";

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    // initial state of all userAnswers
    this.userAnswers = new Map();
    this.props.questions.forEach(q => this.userAnswers.set(q.id, []));

    // initiate state
    this.state = {
      currentIndex: 0,
      userAnswers: this.userAnswers
    };

    this.updateUserAnswer = this.updateUserAnswer.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTimerEnd = this.onTimerEnd.bind(this);
  }

  updateUserAnswer(questionId, userAnswer) {
    this.userAnswers.set(questionId, userAnswer);
    this.setState({userAnswers: this.userAnswers});
  }

  handleNavClick(event) {
    const val = parseInt(event.target.id);
    this.setState(state => ({
      currentIndex: state.currentIndex + val
    }));
    event.preventDefault();
  }

  onSubmit(event) {
    event.preventDefault();
    const yes = confirm("Do you really want to submit the quiz? This will submit all your answers.");
    if (yes) {
      console.log(this.state.userAnswers);
      Router.push("/submission");
    }
  }

  onTimerEnd(info) {
    alert(info);
  }

  render() {

    const question = this.props.questions[this.state.currentIndex];

    return (
      <div className="col-md-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
        <h2 className="text-center dlq-h2">Deep Learning Quiz</h2>
        <Timer time={this.props.time} onTimerEnd={this.onTimerEnd}/>
        <div className="border rounded shadow quiz-container">
          <h4 className="text-center">
            <b>Question</b>: {this.state.currentIndex + 1} / {this.props.questions.length}
          </h4>
          <Question
            key={question.id}
            question={question}
            userAnswer={this.state.userAnswers.get(question.id)}
            updateUserAnswer={this.updateUserAnswer}/>
          {
            this.state.currentIndex < this.props.questions.length - 1 ?
              <button className="btn btn-outline-primary btn-block text-center border rounded"
                      type="button"
                      onClick={this.handleNavClick} id="+1">
                Next question
              </button> : ""
          }
          {
            this.state.currentIndex > 0 ?
              <button className="btn btn-outline-primary btn-block text-center border rounded"
                      type="button"
                      onClick={this.handleNavClick} id="-1">
                Previous question
              </button> : ""
          }
          <button
            className="btn btn-primary btn-block text-center border rounded"
            type="button"
            onClick={this.onSubmit}>
            Submit quiz
          </button>
          <div className="clearfix"/>
        </div>
      </div>
    );
  }
}

export default Quiz;