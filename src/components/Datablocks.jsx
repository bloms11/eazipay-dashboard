import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePieChart } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { SlHandbag } from "react-icons/sl";

const Datablocks = () => {
  return (
    <div className="grid grid-cols-3 gap-x-12 w-full max-[1350px]:grid-cols-2 max-[920px]:grid-cols-1">
      <div className="flex flex-col justify-between rounded-[12px] p-4 h-[160px] max-[1350px]:m-4  bg-white">
        <div className="flex justify-between items-center ">
          <div className="flex rounded-[8px] items-center justify-center p-2 bg-[rgba(85,112,241,0.12)]">
            <AiOutlinePieChart color="#5570F1" size={20} />
          </div>
          <div className="flex gap-x-3 text-[#BEC0CA] ">
            <p className="text-[12px]">This Week</p>
            <FiChevronDown />
          </div>
        </div>
        <div className="flex w-full pr-8 justify-between ">
          <div className="flex flex-col">
            <p className="text-[#BEC0CA]">Sales</p>
            <h4 className=" max-[400px]:text-[12px]">₦4,000,000.00</h4>
          </div>
          <div className="flex flex-col">
            <p className="text-[#BEC0CA]">Volume</p>
            <div className="flex items-center">
              <h4>450</h4>
              {"   "} {"     "}
              <span className="text-[#519C66] text-[12px]">{"  "} +20.00%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-[12px] p-4 h-[160px] max-[1350px]:m-4  bg-white">
        <div className="flex justify-between items-center ">
          <div className="flex rounded-[8px] items-center justify-center p-2 bg-[rgba(255,204,145,0.16)]">
            <HiOutlineUsers color="#1C1D22" size={20} />
          </div>
          <div className="flex gap-x-3 text-[#BEC0CA] ">
            <p className="text-[12px]">This Week</p>
            <FiChevronDown />
          </div>
        </div>
        <div className="flex w-full pr-8 justify-between ">
          <div className="flex flex-col">
            <p className="text-[#BEC0CA]">Sales</p>
            <div className="flex items-center">
              <h4>1,250</h4>
              {"   "} {"     "}
              <span className="text-[#519C66] text-[12px]">{"  "} +15.80%</span>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[#BEC0CA]">Volume</p>
            <div className="flex items-center">
              <h4>1,180</h4>
              {"   "} {"     "}
              <span className="text-[#519C66] text-[12px]">{"  "} +85%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-[12px] p-4 h-[160px] max-[1350px]:m-4 bg-white">
        <div className="flex justify-between items-center ">
          <div className="flex rounded-[8px] items-center justify-center p-2 bg-[rgba(255,204,145,0.16)]">
            <SlHandbag color="#5570F1" size={20} />
          </div>
          <div className="flex gap-x-3 text-[#BEC0CA] ">
            <p className="text-[12px]">This Week</p>
            <FiChevronDown />
          </div>
        </div>
        <div className="flex w-full pr-8 justify-between ">
          <div className="flex flex-col">
            <p className="text-[#BEC0CA]">All Orders</p>
            <h4>450</h4>
          </div>
          <div className="flex flex-col">
            <p className="text-[#BEC0CA]">Pending</p>
            <h4>5</h4>
          </div>
          <div className="flex flex-col">
            <p className="text-[#BEC0CA]">Completed</p>
            <h4>445</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datablocks;
