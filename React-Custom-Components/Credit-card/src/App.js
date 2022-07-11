import "./App.css";
import { useState } from "react";
import Credit from "./Components/Credit";

function App() {
  const [credit, setCredit] = useState("");
  return (
    <div className="App">
      <h4>Enter your Card Number</h4>
      <Credit
        length={4}
        maxLength={4}
        setCreditHandler={(v) => {
          setCredit(v);
        }}
      />
      <p className="cardNum">
        Your Card Number is <span>{credit}</span>
      </p>
    </div>
  );
}

export default App;
