import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { PieChart, Pie, Cell } from "recharts";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

const MarkettingBlock = () => {
  const data = [
    { name: "Red", value: 120 },
    { name: "Green", value: 90 },
    { name: "Blue", value: 280 },
  ];

  const COLORS = ["#97A5EB", "#FFCC91", "#5570F1"];

  return (
    <div className=" grid grid-cols-2 gap-x-12 max-[820px]:grid-cols-1">
      <div className=" p-4 space-y-4 h-fit rounded-[12px] bg-white ">
        <div className="flex w-full justify-between">
          <h4 className="text-[16px]">Marketting</h4>
          <div className="flex gap-x-3 text-[#BEC0CA] ">
            <p className="text-[12px]">This Week</p>
            <FiChevronDown />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-x-3">
            <div className="flex bg-[#5570F1] w-[10px] h-[10px] rounded-full"></div>
            <p className="text-[11px] text-[#A6A8B1]">Acquisition </p>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="flex bg-[#97A5EB] w-[10px] h-[10px] rounded-full"></div>
            <p className="text-[11px] text-[#A6A8B1]">Purchase </p>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="flex bg-[#FFCC91] w-[10px] h-[10px] rounded-full"></div>
            <p className="text-[11px] text-[#A6A8B1]">Rejection </p>
          </div>
        </div>
        <PieChart className="mx-auto overflow-hidden" width={250} height={220}>
          <Pie
            data={data}
            cx={120}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            // paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>{" "}
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col justify-between rounded-[12px] p-4 h-[160px] max-[820px]:my-12  bg-[#5570F1]">
          <div className="flex justify-between items-center ">
            <div className="flex rounded-[8px] items-center justify-center p-2 bg-[rgba(255,255,255,0.16)]">
              <HiOutlineFolderMinus color="white" size={20} />
            </div>
            {/* <div className="flex gap-x-3 text-[#BEC0CA] ">
              <p className="text-[12px]">This Week</p>
              <FiChevronDown />
            </div> */}
          </div>
          <div className="flex text-white justify-between ">
            <div className="flex flex-col">
              <p className="text-[white]">All Products</p>
              <div className="flex items-center">
                <h4 className="text-white">45</h4>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[white]">Active</p>
              <div className="flex items-center">
                <h4 className="text-[white]">32</h4>
                {"   "} {"     "}
                <span className="text-[#519C66] text-[12px]">{"  "} +24%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-[12px] p-4 h-[160px] bg-white">
          <div className="flex justify-between items-center ">
            <div className="flex rounded-[8px] items-center justify-center p-2 bg-[rgba(255,204,145,0.16)]">
              <IoCartOutline color="#1C1D22" size={20} />
            </div>
            <div className="flex gap-x-3 text-[#BEC0CA] ">
              <p className="text-[12px]">This Week</p>
              <FiChevronDown />
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <p className="text-[#CC5F5F]">Abandoned Cart</p>
              <div className="flex items-center">
                <h4>20%</h4>
                {"   "} {"     "}
                <span className="text-[#519C66] text-[12px]">
                  {"  "} +0.00%
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#BEC0CA]">Customers</p>
              <div className="flex items-center">
                <h4>30</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkettingBlock;
