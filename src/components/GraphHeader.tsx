import React from "react";

interface graphType{
    title: string;
}

const GraphHeader = (props: graphType) => {
  return (
    <>
      <div className="graph-title">
        <hr />
        <h2 className="graph-heading">{props.title}</h2>
        <hr />
      </div>
    </>
  );
};

export default GraphHeader;
