import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backenddata, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div className="App">
      {typeof backenddata.users === "undefined" ? (
        <p>not found </p>
      ) : (
        backenddata.users.map((user, i) => <p key={i}> {user}</p>)
      )}
    </div>
  );
}

export default App;
