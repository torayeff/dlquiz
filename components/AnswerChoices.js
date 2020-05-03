import React from "react";

class AnswerChoices extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event);
  }

  render() {
    return (
      <div>
        {
          this.props.type !== "text" ?
            this.props.answers.map((answer, index) =>
              <div className="form-check" key={this.props.id + "-" + index}>
                <input className="form-check-input"
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
            ) : ""
        }
      </div>
    )
  }

}

export default AnswerChoices;