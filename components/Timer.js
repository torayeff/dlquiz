import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {remainingTime: this.props.time};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tickDown(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tickDown() {
    const rt = this.state.remainingTime - 1;

    if (rt >= 0) {
      this.setState({remainingTime: rt});
    } else {
      clearInterval(this.timerID);
      this.props.onTimerEnd("Time elapsed");
    }
  }

  renderTime(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);

    h = h > 0 ? h + ":" : "";
    m = m >= 10 ? m + ":" : "0" + m + ":";
    s = s >= 10 ? s : "0" + s;

    return h + m + s;
  }

  render() {
    return (
      <div className="timer text-center">
        <h4>{this.renderTime(this.state.remainingTime)}</h4>
      </div>
    );
  }
}

export default Timer;