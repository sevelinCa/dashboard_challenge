import React from "react";

const StatsCard = ({ title, value, change, since, index }) => {
  return (
    <div
      className={`bg-white p-3 rounded-lg ${index === 1 && "bg-blue-400/40"} ${
        index === 2 && "bg-red-400/40"
      } ${index === 3 && "bg-blue-400/40"} `}
    >
      <h3 className="text-[14px] font-[500]">{title}</h3>
      <p className="text-[20px] font-bold">{value}</p>
      <div className="flex flex-row gap-[4px] items-center">
        <p className="text-black text-[14px]">{since}</p>
        <p className="text-black text-[12px] px-2 bg-white/60 rounded-[2px]">{change}</p>
      </div>
    </div>
  );
};

export default StatsCard;
