import React from "react";
import AnswerChoices from "./AnswerChoices";
import renderMathInElement from "../modules/auto-render";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    renderMathInElement(document.getElementById("question"));
  }

  render() {
    return (
      <div id="question" className="question">
        <div
          id="question-text"
          className="text-justify"
          dangerouslySetInnerHTML={{__html: this.props.question.text}}/>

        <form className="dlq-question-form" id={this.props.question.id}>
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

      </div>
    );
  }
}

export default Question;