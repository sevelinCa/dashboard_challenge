import React from "react";

const StatsCard = ({ title, value, change, since,index }) => {
    return (
      <div className={`bg-white p-3 rounded-lg ${index===1 && "bg-blue-400/40"} ${index===2 && "bg-red-400/40"} ${index===3 && "bg-blue-400/40"} `}>
        <h3 className="text-[14px] font-[500]">{title}</h3>
        <p className="text-[20px] font-bold">{value}</p>
        <p className="text-green-500">{change}</p>
        <p className="text-gray-500">{since}</p>
      </div>
    );
  };
  
  export default StatsCard;