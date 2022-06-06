import React from "react";
import Chartbar from "./Chartbar";
import "./Chartbar.css";
import "./Chart.css";

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximun = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
