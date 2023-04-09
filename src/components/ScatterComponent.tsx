import React from "react";
import ReactEcharts from "echarts-for-react";
import { wineData } from "../constants/Wine-Data";

interface WineData {
  "Alcohol": number;
  "Malic Acid": number;
  "Ash": number;
  "Alcalinity of ash": number;
  "Magnesium": number;
  "Total phenols": number;
  "Flavanoids": number;
  "Nonflavanoid phenols": number;
  "Proanthocyanins": string ;
  "Color intensity": number;
  "Hue": number;
  "OD280/OD315 of diluted wines": number;
  "Unknown": number;
  }

const option = {
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
      data: wineData.map((item: WineData ) => [item["Color intensity"], item["Hue"]]),
      type: "scatter",
    },
  ],
};

const ScatterComponent = () => {
  return (
    <>
      <h3 className="Scatter-Graph" >Scatter Component</h3>
      <ReactEcharts option={option} />
    </>
  );
};

export default ScatterComponent;
