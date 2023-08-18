import React, { useEffect, useState } from "react";
import Logo from "../assets/logs.png";
// import Logo2 from "../assets/Graph.png";
import { Link } from "react-router-dom";
import {
  BiCategory,
  BiChevronDown,
  BiUserPlus,
  BiWallet,
} from "react-icons/bi";
import { SlHandbag, SlSettings } from "react-icons/sl";
import { HiOutlineBookOpen, HiOutlineUsers } from "react-icons/hi";
import {
  HiOutlineFolderMinus,
  HiOutlineChatBubbleOvalLeftEllipsis,
} from "react-icons/hi2";
import { PiHandCoinsBold, PiHeadphonesBold } from "react-icons/pi";
import { FiChevronRight } from "react-icons/fi";
import { IoLogOut } from "react-icons/io5";
import { AiOutlineFile, AiOutlineGift } from "react-icons/ai";
import { BsClipboardCheck, BsTelephone } from "react-icons/bs";
const Sidebar = () => {
  const [chartWidth, setChartWidth] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setChartWidth(width <= 1080 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-[300px] max-[1080px]:w-[130px] bg-white flex flex-col justify-between h-[1000px] border-r-2">
      <div className="flex flex-col  space-y-2 text-[#53545C]">
        <img
          className="mb-10"
          // width={chartWidth ? 60 : 120}
          src={Logo}
        />

        <Link
          className="flex border-b-[1px] border-b-[#e7e7e7] items-center gap-x-3 p-4 bg-[#F0F7EB80] border-l-[4px] border-[#11453B] font-[500] text-[14px]"
          to="/"
        >
          <BiCategory size={22} className="text-[#11453B]" />
          <p className=" max-[1080px]:hidden">Dashboard</p>
        </Link>
        <Link
          className="flex border-b-[1px] border-b-[#e7e7e7] items-center gap-x-3 p-4  font-[500] text-[14px]"
          to="/"
        >
          <BiWallet size={22} className="text-[#11453B]" />
          <p className=" max-[1080px]:hidden">Wallet</p>
          <BiChevronDown className="ml-auto" size={22} />
        </Link>
        <Link
          className="flex border-b-[1px] border-b-[#e7e7e7] items-center gap-x-3 p-4  font-[500] text-[14px]"
          to="/"
        >
          <BiUserPlus size={22} className="text-[#11453B]" />
          <p className=" max-[1080px]:hidden">Employee Management</p>
          <BiChevronDown className="ml-auto" size={22} />
        </Link>
        <Link
          className="flex border-b-[1px] border-b-[#e7e7e7] items-center gap-x-3 p-4  font-[500] text-[14px]"
          to="/"
        >
          <AiOutlineFile size={22} className="text-[#11453B]" />
          <p className=" max-[1080px]:hidden">Payroll</p>
          <BiChevronDown className="ml-auto" size={22} />
        </Link>

        <Link
          className="flex border-b-[1px] border-b-[#e7e7e7] items-center gap-x-3 p-4  font-[500] text-[14px]"
          to="/conversations"
        >
          <BsClipboardCheck size={22} className="text-[#11453B]" />
          <p className=" max-[1080px]:hidden">Compliance</p>
          <BiChevronDown className="ml-auto" size={22} />
        </Link>
        <Link
          className="flex border-b-[1px] border-b-[#e7e7e7] items-center gap-x-3 p-4  font-[500] text-[14px]"
          to="/conversations"
        >
          <PiHandCoinsBold size={22} className="text-[#11453B]" />
          <p className=" max-[1080px]:hidden">Quick Loan</p>
          <BiChevronDown className="ml-auto" size={22} />
        </Link>

        <Link
          className="flex border-b-[1px] pb-[40px] border-b-[#e7e7e7] items-center gap-x-3 p-4  font-[500] text-[14px]"
          to="/conversations"
        >
          <HiOutlineBookOpen size={22} className="text-[#11453B]" />
          <p className=" max-[1080px]:hidden">Book Keeping</p>
          <BiChevronDown className="ml-auto" size={22} />
        </Link>
        <Link
          className="flex border-b-[1px] pt-[40px] border-b-[#e7e7e7] items-center gap-x-3 p-4  font-[500] text-[14px]"
          to="/conversations"
        >
          <BsTelephone size={22} className="text-[#11453B]" />
          <p className=" max-[1080px]:hidden">Support</p>
        </Link>

        <Link
          className="flex border-b-[1px] border-b-[#e7e7e7] items-center gap-x-3 p-4  font-[500] text-[14px]"
          to="/"
        >
          <SlSettings size={22} className="text-[#11453B]" />
          <p className=" max-[1080px]:hidden">Settings</p>
          <BiChevronDown className="ml-auto" size={22} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
