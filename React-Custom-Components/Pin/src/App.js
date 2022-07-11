import "./App.css";
import { useState } from "react";
import Pin from "./Components/Pin";

function App() {
  const [pin, setPin] = useState("");
  return (
    <div className="App">
      <h4>Enter your PIN</h4>
      <Pin
        length={5}
        setPinHandler={(v) => {
          setPin(v);
        }}
      />
      <h4>Your PIN is {pin}</h4>
    </div>
  );
}

export default App;
