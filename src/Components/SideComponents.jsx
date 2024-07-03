import React from "react";
import OrderListAnalytic from "./OrderListAnalytic";
import { FaStar } from "react-icons/fa";

const SideComponents = () => {
  return (
    <div className="px-4  w-[35%] flex flex-col gap-[20px]">
      <OrderListAnalytic />
      <div className=" bg-blue-50 p-4  rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[15px] font-semibold">Monthly Sales</h2>
          <select className="border rounded px-2 py-1">
            <option>January</option>
          </select>
        </div>
        <div className="h-[34vh] relative">
          <div className="mb-4">
            <p className="text-sm text-gray-600">Total this month</p>
            <p className="text-[20px] font-bold">$59,690</p>
            <span className="text-sm text-green-500">8.97%</span>
          </div>
          <div className="absolute left-8 right-0 bottom-0 flex justify-between text-xs text-gray-500">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
              <span key={num}>{num}</span>
            ))}
          </div>
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <polyline
              points="30,180 60,160 90,170 120,150 150,160 180,140 210,150 240,130 270,60 300,140 330,120"
              fill="none"
              stroke="#818cf8"
              strokeWidth="2"
            />
          </svg>

          <div className="absolute bottom-1/4 right-8 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
          <div className="absolute bottom-1/3 right-8 bg-indigo-600 text-white px-2 py-1 rounded text-xs">
            $47,000
          </div>
        </div>
      </div>
      <div className="p-4 rounded-lg bg-blue-50 flex flex-row  justify-between w-full">
        <div className="flex flex-row gap-[10px] items-center">
          <div className="p-3 bg-white rounded-[10px]">
          <FaStar color="lightblue" size={30} />
          </div>
          <div className="flex flex-col ">
            <span className="text-[18px] font-[600]">Total Order</span>
            <span className="text-[12px]">sep 01 to oct 01 2023</span>
          </div>
        </div>
        <div className="flex flex-row gap-[10px] items-center">
          <div className="w-[25px] h-[25px] rounded-full">
            <img
              src="https://insightglobal.com/wp-content/uploads/2022/10/headshot-1024x683.jpg"
              className="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div className=" ml-[-20px] w-[25px] h-[25px] rounded-full">
            <img
              src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
              className="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div className="ml-[-20px]  w-[25px] h-[25px] rounded-full">
            <img
              src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
              className="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideComponents;
