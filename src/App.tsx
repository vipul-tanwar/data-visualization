import React from "react";

import ScatterComponent from "./components/ScatterComponent";
import BarComponent from "./components/BarComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="home-title">Data Visualization</h1>
      <div className="home-graphs" >
        <ScatterComponent />
        <hr className="hr-graph" />
        <BarComponent />
      </div>
    </div>
  );
}

export default App;
