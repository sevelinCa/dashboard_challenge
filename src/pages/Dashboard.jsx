import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import StatsCard from "../Components/StatsCard";
import SalesReport from "../Components/SalesReport";
import OrdersList from "../Components/OrderList";
import SideComponents from "../Components/SideComponents";

import { IoIosMenu, IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { TbAlarmAverage } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { MdFilterList } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


const Dashboard = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const HandelOpenMenu = ()=>{
    setOpenMenu(!openMenu)

  }
  return (
    <div className="flex flex-row bg-gray-50  w-full h-full">
      <div className={`  ${openMenu ? "w-[90%] " : "w-0"} z-40 top-14 lg:top-0 lg:w-[15%] overflow-hidden fixed duration-300`}>
        <Navbar/>
      </div>
      <div className="flex flex-col w-full lg:w-[85%] ml-auto  gap-[4px]">
        <nav className=" fixed bg-gray-50 text-black flex md:flex-row justify-between w-full lg:w-[85%]  items-center px-4">
          <div className="">
            {openMenu ? (
              
              <IoClose size={20} onClick={HandelOpenMenu} />
            ) : (
            <IoIosMenu size={20} onClick={HandelOpenMenu}/>
            )}

          </div>
          <span className=" hidden lg:flex text-[20px] text-violet-950 font-[700]">
            Viewer Demographics
          </span>
          <div className="flex items-center justify-between py-2 px-4">
            <div className="flex items-center space-x-2 md:space-x-4">
              <input
                type="text"
                placeholder="Type keywords to search"
                className="p-2 rounded-lg border border-gray-300"
              />
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <IoMdNotificationsOutline />
              </button>
              <button className="p-2 rounded-lg bg-indigo-900 hover:bg-indigo-500">
              <FaRankingStar color="white" />
              </button>
            </div>
          </div>
        </nav>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]  border-b-[2px] ml-4 mr-4 pt-20">
          <div className="flex flex-row cursor-pointer gap-[4px] items-center border-b-[2px] border-black/40 p-1">
            <div>
              <HiOutlineRectangleGroup />
            </div>
            <span className="text-[14px] font-[600]">Value comparison</span>
          </div>
          <div className="flex flex-row cursor-pointer gap-[4px] items-center p-1">
            <div>
              <TbAlarmAverage />
            </div>
            <span className="text-[14px] font-[500] text-gray-500">
              Avarage value
            </span>
          </div>
          <div className="flex flex-row cursor-pointer gap-[4px] items-center p-1">
            <div>
              <CiSettings />
            </div>
            <span className="text-[14px] font-[500] text-gray-500">
              Configure analysis
            </span>
          </div>
          <div className="flex flex-row cursor-pointer gap-[4px] items-center p-1">
            <div>
              <MdFilterList />
            </div>
            <span className="text-[14px] font-[500] text-gray-500">
              Filter analysis
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[10px] px-4 py-2">
          <div className="flex flex-col gap-[10px] w-full md:w-[65%]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatsCard
                title="Total Sales"
                value="$59,690"
                change="+13.4%"
                since="Since last week"
                index={1}
              />
              <StatsCard
                title="Total Orders"
                value="4,865"
                change="+13.4%"
                since="Since last week"
                index={2}
              />
              <StatsCard
                title="Total Customers"
                value="2,245"
                change="+13.4%"
                since="Since last week"
                index={3}
              />
            </div>
            <SalesReport />
            <OrdersList />
          </div>
          <SideComponents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
