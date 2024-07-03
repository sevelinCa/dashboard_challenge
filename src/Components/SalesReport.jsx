import React from "react";

const SalesReport = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full mx-auto flex flex-col gap-[10px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center gap-[20px]">
          <h2 className="text-xl font-bold">Sales Report</h2>
          <div className="flex flex-row gap-[10px]">
            <button className="px-3 py-2 text-sm bg-gray-50 shadow-lg rounded-[4px]">
              12 Months
            </button>
            <button className="px-3 py-2 text-sm bg-gray-200 rounded-[4px]">
              3 Months
            </button>
            <button className="px-3 py-2 text-sm bg-gray-200 rounded-[4px]">
              30 Days
            </button>
            <button className="px-3 py-2 text-sm bg-gray-200 rounded-[4px]">
              7 Days
            </button>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-[14px] text-gray-500">Avg. per month</p>
        <div className="flex items-center">
          <span className="text-[20px] font-bold">$38,500</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-[14px] text-gray-500">↑ Median $45,000</p>
      </div>

      <div className="grid grid-cols-12 gap-2 h-40 items-end">
        {[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ].map((month, index) => (
          <div
            key={month}
            className="flex flex-col items-center justify-end h-full cursor-pointer"
          >
            <div
              className={`w-full ${
                index === 8 ? "bg-blue-500" : "bg-gray-200"
              } rounded-[10px]`}
              style={{
                height: `${
                  [20, 30, 40, 50, 40, 30, 60, 30, 90, 40, 50, 60][index]
                }%`,
              }}
            ></div>
            <span className="text-xs mt-1">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesReport;
