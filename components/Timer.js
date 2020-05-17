import React, { useState, useEffect } from "react";

function renderTime(seconds) {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  h = h > 0 ? h + ":" : "";
  m = m >= 10 ? m + ":" : "0" + m + ":";
  s = s >= 10 ? s : "0" + s;

  return h + m + s;
}

const Timer = (props) => {
  const [remainingTime, setRemainingTime] = useState(props.time);

  useEffect(() => {
    let timer = null;
    timer = setInterval(
      () => {
        if (remainingTime > 0) {
          setRemainingTime(remainingTime - 1);
        } else {
          clearInterval(timer);
        }
      },
      1000
    );

    // cleanup
    return () => clearInterval(timer);
  });

  if (remainingTime === 0) {
    props.onTimerEnd();
  }

  return (
    <div className="timer text-center">
      <h4>{renderTime(remainingTime)}</h4>
    </div>
  );
};

export default Timer;