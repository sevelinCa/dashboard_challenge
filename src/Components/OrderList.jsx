import React from "react";
import OrderItem from "./OrderItem";
import { MdFilterList, MdOutlineFileDownload } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const OrdersList = () => {
  const orders = [
    {
      num: 1,
      customer: "John C.",
      order: "#5845-12",
      cost: "$97.50",
      dueDate: "7 Feb, 2023",
      rating: 4,
      status: "Completed",
    },
    {
      num: 2,
      customer: "Matthew K.",
      order: "#4734-01",
      cost: "$79.50",
      dueDate: "6 Feb, 2023",
      rating: 2,
      status: "Pending",
    },
    {
      num: 3,
      customer: "Agnes K.",
      order: "#4734-01",
      cost: "$79.50",
      dueDate: "6 Feb, 2023",
      rating: 2,
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white py-4 px-1 sm:p-4 rounded-lg shadow-md flex flex-col gap-[4px]">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-[18px] font-semibold mb-4">Orders List</h3>
        <div className="flex flex-row gap-[10px] items-center">
          <MdFilterList size={20} color="gray" className="cursor-pointer" />
          <MdOutlineFileDownload
            size={20}
            color="gray"
            className=" cursor-pointer"
          />
          <HiOutlineDotsHorizontal
            size={20}
            color="gray"
            className=" cursor-pointer"
          />
        </div>
      </div>
      <table className="w-full rounded-[4px]">
        <tr className="h-10 bg-gray-100 rounded-[4px]">
          <td className="text-[14px] text-gray-600 font-[400] text-start px-2">
            Num
          </td>
          <td className="text-[14px] text-gray-600 font-[400] text-start">
            Customer
          </td>
          <td className=" hidden sm:flex text-[14px] text-gray-600 font-[400] text-start">
            Order
          </td>
          <td className="text-[14px] text-gray-600 font-[400] text-start px-2">
            Cout
          </td>
          <td className=" hidden sm:flex text-[14px] text-gray-600 font-[400] text-start">
            Due Date
          </td>
          <td className="text-[14px] text-gray-600 font-[400] text-start">
            Rating
          </td>
          <td className="  text-[14px] text-gray-600 font-[400] text-start">
            Status
          </td>
        </tr>
        {orders.map((order,index) => (
        <tr>
          <td className="px-2 p-2">
            <div className="border w-[20px] flex items-center justify-center text-[12px] h-[20px] p-2 rounded-full">
              {index + 1}
            </div>
          </td>
          <td className="text-[12px]">
            <div className="flex flex-row gap-[4px] items-center">
              <div className="w-[20px] h-[20px] rounded-full">
                <img
                  src="https://insightglobal.com/wp-content/uploads/2022/10/headshot-1024x683.jpg"
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
              </div>
              {order.customer}
            </div>
          </td>
          <td className="hidden sm:flex">
            <div className="px-1 rounded-[2px] bg-gray-100 flex items-center justify-center"><span className=" text-[12px] text-violet-500">{order.order}</span></div>
          </td>
          <td className=" px-2">
            <span className="text-[12px]">{order.cost}</span>
          </td>
          <td className=" hidden sm:flex">
            <span className="text-[12px]">{order.dueDate}</span>
          </td>
          <td>
            <div className="flex text-[12px] flex-row gap-[1px]">
              {Array(order.rating).fill("⭐").map((star,index)=>(
                <span key={index}>{star}</span>
              ))}
            </div>
          </td>
          <td className="">
            <span className="text-[12px]">
                <div className="flex flex-row gap-[4px] items-center">
                    <div className={`w-[6px] h-[6px] rounded-full ${order.status === "Completed" && "bg-green-500"} ${order.status === "Pending" && "bg-orange-500"}`}></div>
                    <span className={`${order.status === "Completed" && "text-green-500"} ${order.status === "Pending" && "text-orange-500"}`}>{order.status}</span>
                </div>
            </span>
          </td>
        </tr>
      
     
      ))}
      </table>
     
    </div>
  );
};

export default OrdersList;
