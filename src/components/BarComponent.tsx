import React from "react";
import ReactEcharts from "echarts-for-react";
import { wineData } from "../constants/Wine-Data";

interface WineData {
  "Alcohol": number | string;
  "Malic Acid": number ;
}


const options = {
  title: {
    text: "Color Intensity vs Malic Acid",
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    data: [...new Set(wineData.map((item: WineData) => item.Alcohol))],
    name: 'Alcohol Class'
  },
  yAxis: {
    type: 'value',
    name: 'Malic Acid'
  },
  series: [
    {
      name: 'Average Malic Acid',
      type: 'bar',
      data: [...new Set(wineData.map((item: WineData) => item.Alcohol))]
        .map((alcohol: number) => {
          const average : number = wineData.filter((item: WineData) => item.Alcohol === alcohol)
            .reduce((sum: number, item: WineData) => sum + item['Malic Acid'], 0) / wineData.filter((item: WineData) => item.Alcohol === alcohol).length;
          return average.toFixed(2);
        })
    }
  ]
};


const BarComponent = () => {

  return (
    <>
      <h2 className="graph-heading">BarComponent</h2>
      <ReactEcharts option={options} />
    </>
  );
};

export default BarComponent;
