import React, { useState, useRef } from 'react';

export default function MyCustomWidget() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000); // Update elapsed time every second
    } else {
      clearInterval(intervalRef.current);
    }
    setIsRunning((prevState) => !prevState);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ minWidth: 300 }}>
      <div className="stopwatch-widget">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
          <p>Stopwatch</p>
        </div>
        <div className="stopwatch-display">
          <span>{formatTime(elapsedTime)}</span>
        </div>
        <div className="stopwatch-buttons">
          <button style={{ marginRight: "10px" }} onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>

          <button onClick={resetStopwatch}>Reset</button>
        </div>
      </div>
    </div>
  );
}
