import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const timerRef = useRef([]);
  const [time, setTime] = useState([]);
  const [stopTimer, setStopTimer] = useState(true);
  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(true);
  const [inputBox] = useState(new Array(3).fill(""));

  const handleChange = (e, index) => {
    if (e.target.value.length > 1 && index > 0) {
      timerRef.current[index - 1].focus();
    }
  };
  let timer;
  const startTimerHandler = () => {
    setStartTimer(true);
    setResetTimer(false);
    setStopTimer(false);
    timer = setInterval();
  };

  const stopTimerHandler = () => {
    setStartTimer(false);
    setResetTimer(false);
    setStopTimer(true);
    clearInterval(timer);
  };

  const resetTimerHandler = () => {
    setStartTimer(false);
    setStopTimer(true);
    setResetTimer(true);
  };

  return (
    <div className="App">
      <h3>Stopwatch</h3>
      <div className="inputBox">
        {new Array(3).fill(1).map((_, index) => {
          return (
            <input
              key={index}
              onChange={(e) => handleChange(e, index)}
              maxLength={2}
              ref={(ele) => {
                timerRef.current[index] = ele;
              }}
            />
          );
        })}
      </div>
      <div>
        <button onClick={startTimerHandler}>START</button>
        <button onClick={stopTimerHandler}>STOP</button>
        <button onClick={resetTimerHandler}>RESET</button>
      </div>
    </div>
  );
}

export default App;
