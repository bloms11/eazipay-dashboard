import React from "react";
import image1 from "../assets/13.png";
import image2 from "../assets/iphone.png";
import { SlHandbag } from "react-icons/sl";
import { BsCheckLg } from "react-icons/bs";
import { FaPlus, FaRegPaperPlane, FaRegSmile } from "react-icons/fa";

const Chat = () => {
  return (
    <div className="w-[65%] mt-4 rounded-[12px] bg-white">
      <div className="border-b-[1px] p-4">
        <div className="flex  cursor-pointer justify-between w-full py-2">
          <img src={image1} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[16px] font-[500]">Jane Doe</p>
              <div className="flex items-center gap-x-3">
                <div className="flex bg-[#5570F1] w-[10px] h-[10px] rounded-full"></div>
                <p className="text-[11px] text-[#A6A8B1]">Online </p>
                <p className="text-[#8B8D97]">12:55am</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-3">
                <p className="text-[#1C1D22] bg-[#FEF5EA] text-[12px] ">
                  New Customer
                </p>
                <p className="text-[#5570F1]">View Profile</p>
              </div>
              <p
                className={`text-[12px] justify-end flex gap-x-3 rounded-[8px] p-2`}
              >
                <SlHandbag /> 0 orders
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[600px] border-2 overflow-visible">
        <div className="flex bg-[#F4F5FA] mx-auto p-2 w-max rounded-[8px] mt-4">
          <p className="text-[#1C1D22] overflow-hidden">12 August 2022</p>
        </div>

        <div className="p-4">
          <div className="flex flex-col">
            <div className="flex cursor-pointer gap-x-2 w-full py-2">
              <img src={image2} />
              <div className="flex w-[90%] justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-[#45464E] text-[14px]">iPhone13</p>
                  <p className="text-[14px] text-[#33343a] truncate font-[500]">
                    ₦730,000.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex max-w-[400px] rounded-t-[16px] rounded-br-[16px] bg-[#5570F1]">
              <p className="text-[16px] text-white p-4 ">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <p className="text-[16px] p-2">12:55am</p>
          </div>
          <div className="flex flex-col items-end justify-end">
            <div className="flex bg-[#FFEAD1] max-w-[400px] rounded-t-[16px] rounded-bl-[16px]">
              <p className="text-[16px] p-4">
                Hello Janet, thank you for reaching out
              </p>
            </div>
            <div className="flex items-center mt-2">
              <p>12:57 am</p>
              <div className="flex p-2 rounded-full bg-[#ffead1]">
                <BsCheckLg />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end mt-2 justify-end">
            <div className="flex bg-[#FFEAD1] max-w-[400px] rounded-t-[16px] rounded-bl-[16px]">
              <p className="text-[16px] p-4">What do you ned to know?</p>
            </div>
            <div className="flex items-center mt-2">
              <p>12:57 am</p>
              <div className="flex p-2 rounded-full bg-[#ffead1]">
                <BsCheckLg />
              </div>
            </div>
          </div>
          <div className="flex bg-[#F4F5FA] mx-auto p-2 w-max rounded-[8px] mt-4">
            <p className="text-[#1C1D22]">Today</p>
          </div>
          <div className="flex flex-col">
            <div className="flex max-w-[400px] rounded-t-[16px] rounded-br-[16px] bg-[#5570F1]">
              <p className="text-[16px] text-white p-4 ">
                I want to know if the price is negotiable, i need about 2 Units
              </p>
            </div>
            <p className="text-[16px] p-2">12:55am</p>
          </div>
        </div>
      </div>
      <div className="relative w-full px-4 mt-4">
        <div className="flex items-center border px-4 rounded-lg bg-white">
          <button className="p-2 bg-[#FFF2E2] rounded-[8px]">
            <FaPlus size={20} color="#1C1D22" />
          </button>
          <input
            type="text"
            className="flex-1 border-none outline-none p-2"
            placeholder="Your message"
          />
          <div className="flex items-center space-x-2 p-2">
            <FaRegSmile size={20} color="#5570F1" />
            <button className="bg-[#FFF2E2] text-[#1C1D22] flex items-center p-2 rounded-lg">
              Send <FaRegPaperPlane className="ml-2" />
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Chat;
