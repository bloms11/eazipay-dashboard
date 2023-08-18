import React, { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineEye } from "react-icons/ai";
import { BiChevronDown, BiUserPlus } from "react-icons/bi";
import { BsCash, BsFillSendFill } from "react-icons/bs";
import { PiHandCoinsBold } from "react-icons/pi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Dashboard = () => {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 700 },
  ];
  return (
    <div>
      {/* <Datablocks />
      <div className="grid grid-cols-2 max-[1420px]:grid-cols-1 gap-x-10 w-full mt-12">
        <div className=" grid grid-cols-1">
          <MarkettingBlock />
          <Graph />
        </div>
        <Orders />
      </div> */}
      <div className="flex flex-col space-y-8">
        <h1 className="text-[#292A29]">Welcome Abasiama</h1>
        <p className="text-[#515251] font-[500]">
          Pay and manage your employee in minutes
        </p>
        <div className="w-[100%]  flex ">
          <div className="flex w-[100%] flex-col justify-between">
            <div className="flex flex-col w-[86%] bg-[#11453B] space-y-2 rounded-[24px] p-8">
              <p className="text-[#D9EBCD] font-[500]">Wallet Balance</p>
              <div className="flex w-[100%] justify-between">
                <div className="flex gap-x-3 items-center">
                  <h4 className="text-[white] text-[32px] font-[700]">
                    N12,560,078.00
                  </h4>
                  <AiOutlineEye color="#D9EBCD" size={22} />
                </div>
                <button className="bg-[#D9EBCD] text-[#11453B] font-[500] px-6 py-4 rounded-[24px]">
                  Fund Wallet
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 w-[86%] gap-x-16 ">
              <div className="flex flex-col space-y-4 items-center bg-white rounded-[24px] p-4">
                <div className="flex p-2 py-4 px-4 bg-[#FFEDEC] rounded-[12px]">
                  <BiUserPlus color="#EA4E4B" size={24} />
                </div>
                <p>Add Employee</p>
              </div>
              <div className="flex flex-col space-y-4 items-center bg-white rounded-[24px] p-4">
                <div className="flex p-2 py-4 px-4 bg-[#F0F7EB] rounded-[12px]">
                  <BsCash color="#11453B" size={24} />
                </div>
                <p>Pay Salaries</p>
              </div>
              <div className="flex flex-col space-y-4 items-center bg-white rounded-[24px] p-4">
                <div className="flex p-2 py-4 px-4 bg-[#E0F8EA] rounded-[12px]">
                  <BsFillSendFill color="#219653" size={24} />
                </div>
                <p>Pay Compliances</p>
              </div>
              <div className="flex flex-col space-y-4 items-center bg-white rounded-[24px] p-4">
                <div className="flex p-2 py-4 px-4 bg-[#EDF5FF] rounded-[12px]">
                  <PiHandCoinsBold color="#2F80ED" size={24} />
                </div>
                <p>Quick Loan</p>
              </div>
            </div>
          </div>
          <div className="flex border-2 flex-col w-[300px] rounded-[24px]">
            <div className="flex justify-center bg-[#D9EBCD]">
              <h4 className="text-[#515251] font-[700] text-center py-3">
                Next Payroll
              </h4>
            </div>
            <div className="flex items-center flex-col h-[150px] border-b-2">
              <div className="flex items-center mt-2 gap-x-2">
                <AiOutlineCalendar size={24} />
                <p>Friday</p>
              </div>
              <h4 className="font-[600] mt-2">09/11/2022</h4>
            </div>
            <div className="flex flex-col px-2 h-[150px]">
              <h4 className="mt-3">Total Employee</h4>
              <h4 className="text-[30px]">64</h4>
              <div className="flex w-[100%]">
                <div className="flex w-[50%] flex-col">
                  <div className="flex w-[100%] p-1 bg-[#11453B]"></div>
                  <p>Males</p>
                  <p>32</p>
                </div>
                <div className="flex w-[50%] flex-col">
                  <div className="flex w-[100%] p-1 bg-[#EA4E4B]"></div>
                  <p>Females</p>
                  <p>32</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white p-4 space-y-4 w-full">
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col">
              <h4>Inflow</h4>
              <h1 className="text-[#219653]">N1,567,552</h1>
            </div>
            <div className="flex flex-col">
              <h4>Inflow</h4>
              <h1 className="text-[#EF4444]">N1,567,552</h1>
            </div>
            <div className="flex items-center gap-x-2">
              <h4>Inflow/Outflow</h4>
              <BiChevronDown size={22} />
            </div>
          </div>
          <LineChart className="mx-auto" width={1100} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
          <div className="flex bg-[#11453B] w-max p-4 ml-auto font-[500] text-white">
            2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
