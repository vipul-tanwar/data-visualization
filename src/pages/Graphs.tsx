import React from 'react'
import ScatterComponent from "../components/ScatterComponent";
import BarComponent from "../components/BarComponent";


const Graphs = () => {
  return (
    <>
        <h1 className="home-title">Data Visualization</h1>
      <div className="home-graphs" >
        <ScatterComponent />
        <hr className="hr-graph" />
        <BarComponent />
      </div>
    </>
  )
}

export default Graphs