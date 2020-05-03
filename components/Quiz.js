import React from "react";
import Question from "./Question";

class Quiz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      "current_index": 0,
      "questions": this.props.questions
    };
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  handleNavClick(event) {
    const val = parseInt(event.target.id);
    this.setState(state => ({
      current_index: state.current_index + val
    }));
    event.preventDefault();
  }

  handleShuffle(event) {
    event.preventDefault();
    this.setState({
      current_index: 0,
      questions: this.shuffle(this.props.questions)
    });
  }

  render() {

    return (
      <div className="col-md-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
        <h2 className="text-center dlq-h2">Deep Learning Quiz</h2>
        <div className="border rounded shadow dlq-quiz-container">
          <h4 className="text-center">
            <b>Question</b>: {this.state.current_index + 1} / {this.state.questions.length}
          </h4>
          {
            this.state.questions.map((q, idx) =>
              <div key={q.id} className={this.state.current_index === idx ? "" : "dlq-hide"}>
                <Question question={q}/>
              </div>)
          }
          {
            this.state.current_index < this.state.questions.length - 1 ?
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
          <button className="btn btn-secondary btn-block text-center border rounded"
                  type="button"
                  onClick={this.handleShuffle}>
            Shuffle questions
          </button>
          <div className="clearfix"/>
        </div>
      </div>
    );
  }
}

export default Quiz;