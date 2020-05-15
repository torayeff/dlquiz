import React from "react";
import AnswerForm from "./AnswerForm";
import renderMathInElement from "../modules/auto-render";

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    renderMathInElement(document.getElementById("question"));
  }

  onSubmit(answers) {
    console.log(answers);
  }

  render() {
    return (
      <div id="question" className="question-container">
        <form id={this.props.question.id}>
          <div
            id="question-text"
            className="text-justify"
            dangerouslySetInnerHTML={{__html: this.props.question.text}}/>

          <small className="text-black-50">
            <i>Source: {this.props.question.source}</i>
          </small>

          <AnswerForm id={this.props.question.id}
                      answers={this.props.question.answers}
                      type={this.props.question.type}
                      onSubmit={this.onSubmit}/>
        </form>
      </div>
    );
  }
}

export default Question;