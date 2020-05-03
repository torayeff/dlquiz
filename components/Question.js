import React from "react";
import AnswerChoices from "./AnswerChoices";

class Question extends React.Component{
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.state = {
      "selectedAnswer": [],
      "info": "",
      "showCheckAnswer": true,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    MathJax.typeset();
  }

  onChange(event) {
    let selectedAnswer = this.state.selectedAnswer;
    if (this.props.question.type === "one_correct") {
      selectedAnswer = [event.target.value];
    } else if (this.props.question.type === "multi_correct") {
      if (event.target.checked) {
        selectedAnswer.push(+event.target.value);
      } else {
        const idx = selectedAnswer.indexOf(+event.target.value);
        selectedAnswer.splice(idx, 1);
      }
    }
    this.setState({selectedAnswer: selectedAnswer});
  }

  checkAnswer() {

    let info = "";

    if (this.props.question.type === "text") {
      info = (
        <div className="alert alert-info dlq-notification">
          <b>Correct answer:</b>
          <div className="text-justify" dangerouslySetInnerHTML={{__html: this.props.question.correctAnswer}} />
          <div className="text-justify" dangerouslySetInnerHTML={{__html: this.props.question.answerComment}} />
        </div>
      );
      this.setState({showCheckAnswer: false});
    } else {
      const correctAnswer = this.props.question.correctAnswer.sort().join("-");
      const selectedAnswer = this.state.selectedAnswer.sort().join("-");

      if (selectedAnswer === "") {
        info = (
          <div className="alert alert-warning dlq-notification">
            <p>Select an answer to check.</p>
          </div>
        );
      } else if (selectedAnswer === correctAnswer) {
        info = (
          <div className="alert alert-success dlq-notification">
            <p>Correct!</p>
            <div className="text-justify" dangerouslySetInnerHTML={{__html: this.props.question.answerComment}} />
          </div>
        );
        this.setState({showCheckAnswer: false});
      } else {
        info = (
          <div className="alert alert-danger dlq-notification">
            <p>Incorrect, try again!</p>
          </div>
        );
      }
    }

    this.setState({info: info});
  }

  render() {
    return (
        <div>
          <div className="text-justify" dangerouslySetInnerHTML={{__html: this.props.question.question}} />
          <form id={this.props.question.id}>
            <AnswerChoices id={this.props.question.id}
                           answers={this.props.question.answers}
                           type={this.props.question.type}
                           onChange={this.onChange}/>
          </form>
          <div className="dlq-question-source">
            <small className="text-black-50">
              <em>Source: {this.props.question.source}</em>
            </small>
          </div>
          {this.state.info}
          {
            this.state.showCheckAnswer ?
            <button className="btn btn-primary btn-block text-center border rounded"
                    type="button"
                    onClick={this.checkAnswer}>
              Check answer
            </button> : ""
          }
        </div>
    );
  }
}

export default Question;