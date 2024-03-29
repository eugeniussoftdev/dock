import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    load();

    async function load() {
      try {
        const response = await fetch("http://localhost:3000/test");
        const data = await response.json();
        console.log("*** RES", data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
