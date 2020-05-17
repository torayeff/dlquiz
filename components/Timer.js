const Timer = (props) => {
  const renderTime = (seconds) => {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);

    h = h > 0 ? h + ":" : "";
    m = m >= 10 ? m + ":" : "0" + m + ":";
    s = s >= 10 ? s : "0" + s;

    return h + m + s;
  };

  return (
    <div className="timer text-center">
      <h4>{renderTime(props.remainingTime)}</h4>
    </div>
  );
};

export default Timer;