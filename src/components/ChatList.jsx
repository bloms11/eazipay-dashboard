import React from "react";
import { FaSearch } from "react-icons/fa";
import image1 from "../assets/13.png";
import image2 from "../assets/12.png";
import image3 from "../assets/11.png";

const ChatList = () => {
  return (
    <div className="w-[480px] bg-white mt-4 rounded-[12px] p-6">
      <div className="flex justify-between w-full">
        <h4>Contacts</h4>
        <h4 className="text-[#A6A8B1]">34</h4>
      </div>
      <div className="flex mt-4 items-center border rounded-lg p-4">
        <FaSearch className="h-5 w-5 text-gray-500 mr-2" />
        <input
          type="text"
          className="border-none outline-none flex-1"
          placeholder="Search"
        />
      </div>
      <div className="flex mt-6 flex-col">
        <div className="flex border-b-[1px] cursor-pointer bg-[#F7F7FC] justify-between w-full py-2">
          <img src={image1} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[14px]">Jane Doe</p>
              <p className="text-[14px] text-[#33343a] truncate font-[500]">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A6A8B1] text-[12px] ">new</p>
              <p className={`text-[12px] rounded-[8px] p-2`}>12:55am</p>
            </div>
          </div>
        </div>
        <div className="flex border-b-[1px] cursor-pointer hover:bg-[#F7F7FC] justify-between w-full py-2">
          <img src={image2} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[14px]">Jane Doe</p>
              <p className="text-[14px] text-[#33343a] truncate font-[500]">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A6A8B1] text-[12px] ">new</p>
              <p className={`text-[12px] rounded-[8px] p-2`}>12:55am</p>
            </div>
          </div>
        </div>
        <div className="flex border-b-[1px] cursor-pointer hover:bg-[#F7F7FC] justify-between w-full py-2">
          <img src={image3} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[14px]">Jane Doe</p>
              <p className="text-[14px] text-[#33343a] truncate font-[500]">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A6A8B1] text-[12px] ">new</p>
              <p className={`text-[12px] rounded-[8px] p-2`}>12:55am</p>
            </div>
          </div>
        </div>
        <div className="flex border-b-[1px] cursor-pointer hover:bg-[#F7F7FC] justify-between w-full py-2">
          <img src={image1} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[14px]">Jane Doe</p>
              <p className="text-[14px] text-[#33343a] truncate font-[500]">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A6A8B1] text-[12px] ">new</p>
              <p className={`text-[12px] rounded-[8px] p-2`}>12:55am</p>
            </div>
          </div>
        </div>
        <div className="flex border-b-[1px] cursor-pointer hover:bg-[#F7F7FC] justify-between w-full py-2">
          <img src={image2} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[14px]">Jane Doe</p>
              <p className="text-[14px] text-[#33343a] truncate font-[500]">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A6A8B1] text-[12px] ">new</p>
              <p className={`text-[12px] rounded-[8px] p-2`}>12:55am</p>
            </div>
          </div>
        </div>
        <div className="flex border-b-[1px] cursor-pointer hover:bg-[#F7F7FC] justify-between w-full py-2">
          <img src={image3} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[14px]">Jane Doe</p>
              <p className="text-[14px] text-[#33343a] truncate font-[500]">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A6A8B1] text-[12px] ">new</p>
              <p className={`text-[12px] rounded-[8px] p-2`}>12:55am</p>
            </div>
          </div>
        </div>
        <div className="flex border-b-[1px] cursor-pointer hover:bg-[#F7F7FC] justify-between w-full py-2">
          <img src={image1} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[14px]">Jane Doe</p>
              <p className="text-[14px] text-[#33343a] truncate font-[500]">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A6A8B1] text-[12px] ">new</p>
              <p className={`text-[12px] rounded-[8px] p-2`}>12:55am</p>
            </div>
          </div>
        </div>
        <div className="flex border-b-[1px] cursor-pointer hover:bg-[#F7F7FC] justify-between w-full py-2">
          <img src={image2} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[14px]">Jane Doe</p>
              <p className="text-[14px] text-[#33343a] truncate font-[500]">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A6A8B1] text-[12px] ">new</p>
              <p className={`text-[12px] rounded-[8px] p-2`}>12:55am</p>
            </div>
          </div>
        </div>
        <div className="flex border-b-[1px] cursor-pointer hover:bg-[#F7F7FC] justify-between w-full py-2">
          <img src={image3} />
          <div className="flex w-[90%] justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#45464E] text-[14px]">Jane Doe</p>
              <p className="text-[14px] text-[#33343a] truncate font-[500]">
                Hello, I want to make enquiries about your product
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[#A6A8B1] text-[12px] ">new</p>
              <p className={`text-[12px] rounded-[8px] p-2`}>12:55am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
