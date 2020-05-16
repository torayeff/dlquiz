import React from "react";
import renderMathInElement from "../modules/auto-render";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"userAnswer": this.props.userAnswer};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    renderMathInElement(document.getElementById("question"));
  }

  onChange(event) {
    if (this.props.question.type === "text") {
      this.setState({userAnswer: event.target.value}, () =>
        this.props.updateUserAnswer(this.props.question.id, this.state.userAnswer));
    } else if (this.props.question.type === "number") {
      this.setState({userAnswer: parseFloat(event.target.value)}, () =>
        this.props.updateUserAnswer(this.props.question.id, this.state.userAnswer));
    } else if (this.props.question.type === "one_correct") {
      this.setState({userAnswer: [parseInt(event.target.value)]}, () =>
        this.props.updateUserAnswer(this.props.question.id, this.state.userAnswer));
    } else if (this.props.question.type === "multi_correct") {
      let answers = document.querySelectorAll("input[type=checkbox]:checked");
      answers = [...answers].map(el => parseInt(el.value));
      this.setState({userAnswer: answers}, () =>
        this.props.updateUserAnswer(this.props.question.id, this.state.userAnswer));
    }
  }

  render() {
    let answerForm;

    if (this.props.question.type === "text") {
      answerForm = (
        <div>
          <textarea
            id="answer"
            rows="5"
            onChange={this.onChange}
            value={this.state.userAnswer}/>
        </div>
      );
    } else if (this.props.question.type === "number") {
      answerForm = (
        <div>
          <input
            type="number"
            step="0.0001"
            placeholder="Answer up to 4 decimal places: 0.1234"
            onChange={this.onChange}
            value={this.state.userAnswer}/>
        </div>
      );
    } else {
      answerForm = this.props.question.answers.map((answer, index) =>
        <div className="form-check" key={this.props.question.id + "-" + index}>
          <input
            className="form-check-input"
            type={this.props.question.type === "one_correct" ? "radio" : "checkbox"}
            id={this.props.question.id + "-" + index}
            name="answer"
            value={index}
            onChange={this.onChange}
            checked={this.state.userAnswer.includes(index)}/>
          <label className="form-check-label"
                 htmlFor={this.props.question.id + "-" + index}>
            {answer}
          </label>
        </div>
      );
    }

    return (
      <div id="question" className="question-container">
        <form id={this.props.question.id}>
          <div
            id="question-text"
            className="text-justify"
            dangerouslySetInnerHTML={{__html: this.props.question.text}}/>
          <div className="answer-form">{answerForm}</div>
          <small className="text-black-50"><i>Source: {this.props.question.source}</i></small>
          <br/>
          <br/>
        </form>
      </div>
    );
  }
}

export default Question;