import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const LineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, data);
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
