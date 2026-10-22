import React from "react";
import Weather from "./Weather-app";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>

        <Weather city="Los Angeles" />
      </header>
    </div>
  );
}

export default App;
