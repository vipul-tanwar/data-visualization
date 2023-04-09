import React from "react";
import ReactEcharts from "echarts-for-react";

import wineData from "../data/Wine-Data.json";
import GraphHeader from "./GraphHeader";

import { WineData } from "../interfaces/Scatter";

// Mapping data in scatter component
const options = {
  title: {
    text: "Color Intensity vs Hue",
  },
  tooltip: {},
  xAxis: {
    name: "Color Intensity",
  },
  yAxis: {
    name: "Hue",
  },
  series: [
    {
      symbolSize: 8,
      data: wineData.map((item: WineData) => [
        item["Color intensity"],
        item["Hue"],
      ]),
      type: "scatter",
    },
  ],
};

const ScatterComponent = () => {
  return (
    <>
      {/* Scatter Custom Title */}
      <GraphHeader title="Scatter Component" />
      {/* Loading Scatter Component */}
      <ReactEcharts option={options} />
    </>
  );
};

export default ScatterComponent;
