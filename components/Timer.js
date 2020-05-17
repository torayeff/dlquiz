import {useEffect, useState} from "react";

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

  const [remainingTime, setRemainingTime] = useState(props.time);
  useEffect(() => {

    if (!remainingTime) {
      props.onTimerEnd();
      return;
    }

    const timerID = setInterval(() => {
      setRemainingTime(remainingTime - 1);
    }, 1000);

    // cleanup
    return () => clearInterval(timerID);
  }, [remainingTime]);

  return (
    <div className="timer text-center">
      <h4>{renderTime(remainingTime)}</h4>
    </div>
  );
};

export default Timer;