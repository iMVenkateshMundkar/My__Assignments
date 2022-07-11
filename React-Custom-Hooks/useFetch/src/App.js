import "./App.css";
import { useFetch } from "./Hooks/useFetch";

function App() {
  const url = "https://api.github.com/search/users?q=masai";
  const [loading, data, error] = useFetch(url);
  return (
    <div className="App">
      {loading && "Loading"}
      {data.length > 0
        ? data.map((item) => {
            return <div key={item}>{item.login}</div>;
          })
        : error}
    </div>
  );
}

export default App;
