import React from "react";

const AnalyticsCard = ({ data }) => {
  //   console.log(data);

  return (
    <div className="bg-base-100 rounded-2xl p-5 border border-base-300 shadow-sm hover:-translate-y-1 transition-transform duration-200 cursor-default">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${data.color}`}
        >
          {data.icon}
        </div>
        <span className="text-[11px] font-semibold text-base-content bg-base-200 px-2 py-0.5 rounded-full">
          ↑ {data.sub}
        </span>
      </div>
      <p className="text-2xl font-extrabold text-base-content tracking-tight">
        {data.value}
      </p>
      <p className="text-xs text-base-content mt-1">{data.label}</p>
    </div>
  );
};

export default AnalyticsCard;
