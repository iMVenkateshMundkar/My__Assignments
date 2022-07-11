import "./App.css";
import { useTimeout } from "./Hooks/useTimeout";

function App() {
  const ready = useTimeout(5000);
  return (
    <div className="App">
      <h3>Time Out</h3>
      <div>{ready ? "Ready" : "Not-Ready"}</div>
    </div>
  );
}

export default App;
