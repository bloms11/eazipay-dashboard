import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const data = [
    { name: "Sept 10", value: 270 },
    { name: "Sept 11", value: 100 },
    { name: "Sept 12", value: 150 },
    { name: "Sept 13", value: 80 },
    { name: "Sept 14", value: 250 },
    { name: "Sept 15", value: 180 },
    { name: "Sept 16", value: 280 },
  ];

  const [chartWidth, setChartWidth] = useState(450);
  const [chartHeight, setChartHeight] = useState(280);

  const handleResize = () => {
    const width = window.innerWidth;
    // Set the chart width to 1420px if the screen size is 1420px or larger
    setChartWidth(width <= 1420 ? 800 : 450);
    setChartWidth(width <= 1200 ? 600 : 450);
    setChartWidth(width <= 820 ? 400 : 450);
    setChartWidth(width <= 500 ? 290 : 450);
    setChartHeight(width <= 500 ? 200 : 280);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the chart width based on the initial window size
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" bg-white flex flex-col justify-between p-4 rounded-[12px] max-[1420px]:mt-12 max-[1420px]:mb-12">
      <div className="flex w-full justify-between">
        <div className="flex gap-x-12 items-center">
          <h4 className="text-[16px]">Summary</h4>
          <div className="flex bg-[rgba(85,112,241,0.08)] p-2 rounded-[8px] gap-x-3 text-[#5570F1] ">
            <p className="text-[12px]">Sales</p>
            <FiChevronDown color="#5570F1" />
          </div>
        </div>
        <div className="flex gap-x-3 text-[#BEC0CA] ">
          <p className="text-[12px]">Last 7 Days</p>
          <FiChevronDown />
        </div>
      </div>
      <ResponsiveContainer
        width={chartWidth}
        className="overflow-hidden"
        height={chartHeight}
      >
        <BarChart className="mt-4" data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" axisLine={false} />
          <YAxis axisLine={false} />
          {/* <Tooltip /> */}
          <Legend />
          <Bar
            dataKey="value"
            background="grey"
            fill="#8884d8"
            barSize={20}
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
