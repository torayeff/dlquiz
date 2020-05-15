import React from "react";

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "answers": []
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    let answers = this.state.answers;

    if (this.props.type === "text") {
      answers = [event.target.value];
    } else if (this.props.type === "number") {
      answers = [parseFloat(event.target.value)];
    } else if (this.props.type === "one_correct") {
      answers = [parseInt(event.target.value)];
    } else if (this.props.type === "multi_correct") {
      if (event.target.checked) {
        answers.push(+parseInt(event.target.value));
      } else {
        const idx = answers.indexOf(+parseInt(event.target.value));
        answers.splice(idx, 1);
      }
    }

    this.setState({answers: answers});
  }

  onClick(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.answers);
  }

  render() {
    let answerForm;

    if (this.props.type === "text") {
      answerForm = (
        <div>
          <textarea
            id="answer"
            rows="5"
            onChange={this.onChange}/>
        </div>
      );
    } else if (this.props.type === "number") {
      answerForm = (
        <div>
          <input
            type="number"
            step="0.0001"
            placeholder="Answer up to 4 decimal places: 0.1234"
            onChange={this.onChange}/>
        </div>
      );
    } else {
      answerForm = this.props.answers.map((answer, index) =>
        <div className="form-check" key={this.props.id + "-" + index}>
          <input
            className="form-check-input"
            type={this.props.type === "one_correct" ? "radio" : "checkbox"}
            id={this.props.id + "-" + index}
            name="answer"
            value={index}
            onChange={this.onChange}/>
          <label className="form-check-label"
                 htmlFor={this.props.id + "-" + index}>
            {answer}
          </label>
        </div>
      );
    }
    return (
      <div className="answer-form">
        {answerForm}
        <br/>
        <button
          className="btn btn-primary btn-block text-center border rounded"
          onClick={this.onClick}>
          Submit answer
        </button>
      </div>
    );
  }

}

export default AnswerForm;