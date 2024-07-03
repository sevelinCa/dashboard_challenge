import React, { useState } from "react";
import { TopNavLinks, MiddelNavLinks, bottomNavLinks } from "../data/Navbar";
import { MdDashboard } from "react-icons/md";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [openedSubLink, setOpenedSubLink] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openSubLink = (data) => {
    setIsOpen(!isOpen);
    setOpenedSubLink(data);
  };
  return (
    <div className="flex flex-col justify-between gap-[10px] py-4  bg-blue-950 h-screen w-full">
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-row gap-[10px] items-center px-4">
          <MdDashboard color="white" size={25} />
          <span className="text-[18px] font-[700] text-white">Droitdash</span>
        </div>
        <div className="flex flex-col gap-[20px] border-b border-gray-50/30 px-4 py-4">
          {TopNavLinks.map((item, index) => {
            return (
              <>
                {item?.sub_links ? (
                  <div className="cursor-pointer hover:opacity-90 flex flex-row w-full justify-between">
                    <div className="flex  flex-row gap-[10px] items-center">
                      <div>{item?.icon}</div>
                      <span className="text-[16px] text-white font-[400] ">
                        {item.title}
                      </span>
                    </div>

                    <div className="text-white ">
                      <FaAngleDown />
                    </div>
                  </div>
                ) : (
                  <a
                    href=""
                    className=" hover:opacity-90 flex flex-row gap-[10px] items-center"
                  >
                    {item.icon}
                    <span className="text-[16px] text-white font-[400] ">
                      {item.title}
                    </span>
                  </a>
                )}
              </>
            );
          })}
        </div>
        <div className="flex flex-col gap-[20px] border-b border-gray-50/30 px-4 py-4">
          {MiddelNavLinks.map((item, index) => {
            return (
              <>
                {item?.sub_links ? (
                  <div className="flex flex-col gap-[4px]">
                    <div
                      onClick={() => openSubLink({ index, type: "bottom" })}
                      className="cursor-pointer hover:opacity-90 flex flex-row w-full justify-between"
                    >
                      <div className="flex  flex-row gap-[10px] items-center">
                        {item.icon}
                        <span className="text-[16px] text-white font-[400] ">
                          {item.title}
                        </span>
                      </div>

                      <div className="text-white ">
                        <FaAngleDown />
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-[4px] ${
                        isOpen &&
                        openedSubLink.index === index &&
                        openedSubLink.type === "bottom"
                          ? "py-2"
                          : "h-0 overflow-hidden"
                      } pl-4 transition-all duration-600  `}
                    >
                      {item?.sub_links.map((datas, keyindex) => {
                        return (
                          <a
                            href=""
                            key={keyindex}
                            className={`${
                              keyindex == 0 ? "bg-gray-500" : ""
                            } p-2 rounded-[4px] flex flex-row  gap-[15px] w-full items-center`}
                          >
                            <div
                              className={`w-[10px] h-[10px] rounded-full ${
                                keyindex == 0 && " bg-cyan-500"
                              } ${keyindex == 2 && " bg-cyan-500"} ${
                                keyindex == 1 && "bg-red-500"
                              }`}
                            ></div>
                            <span className="text-white text-[14px]">
                              {datas.title}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <a
                    href=""
                    className=" hover:opacity-90 flex flex-row gap-[10px] items-center"
                  >
                    <div className="w-[25px] h-[25px] bg-white"></div>
                    <span className="text-[16px] text-white font-[400] ">
                      {item.title}
                    </span>
                  </a>
                )}
              </>
            );
          })}
        </div>
        <div className="flex flex-col gap-[20px] border-b border-gray-50/30 px-4 py-4">
          {bottomNavLinks.map((item, index) => {
            return (
              <>
                {item?.sub_links ? (
                  <div className="flex flex-col gap-[4px]">
                    <div
                      onClick={() => openSubLink({ index, type: "bottom" })}
                      className="cursor-pointer hover:opacity-90 flex flex-row w-full justify-between"
                    >
                      <div className="flex  flex-row gap-[10px] items-center">
                        {item.icon}
                        <span className="text-[16px] text-white font-[400] ">
                          {item.title}
                        </span>
                      </div>

                      <div className="text-white ">
                        <FaAngleDown />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      {item?.sub_links.map((data, keyindex) => {
                        return (
                          <a
                            href=""
                            key={keyindex}
                            className="flex flex-row gap-[4px]"
                          >
                            <div
                              className={`w-[10px] h-[10px] rounded-full bg-[${data.icon}]`}
                            >
                              <h1>Hello</h1>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <a
                    href=""
                    className=" hover:opacity-90 flex flex-row gap-[10px] items-center"
                  >
                    {item.icon}
                    <span className="text-[16px] text-white font-[400] ">
                      {item.title}
                    </span>
                  </a>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="px-4">
        <div className="w-full bg-blue-100/40 rounded-[4px] p-4 flex flex-col gap-[40px] cursor-pointer hover:bg-blue-400/60">
        <div className="flex flex-row justify-between items-center">
          <div className="w-10 h-10 rounded-full bg-white">
            <img src="https://insightglobal.com/wp-content/uploads/2022/10/headshot-1024x683.jpg" className="w-full h-full object-cover rounded-full" alt="" />
          </div>
          <FaArrowRight color="white" />
        </div>
        <div className="flex flex-col leading-4">
          <h1 className="text-white text-[16px] font-[600]">WP.AR Pascal</h1>
          <span className="text-[14px] text-gray-100">joepascal@gmail.com</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
