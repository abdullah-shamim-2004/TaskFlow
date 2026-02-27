import React from "react";

const StatCard = ({ item }) => {
  const { label, value, badge, highlight } = item;
  return (
    <div
      className={`
      rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 cursor-pointer
      ${
        highlight
          ? "bg-gradient-to-br from-indigo-500 to-indigo-700 border-transparent shadow-xl shadow-indigo-200 dark:shadow-indigo-900/50"
          : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-lg"
      }
    `}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-sm font-medium ${highlight ? "text-indigo-100" : "text-slate-500 dark:text-slate-400"}`}
        >
          {label}
        </span>
        <div
          className={`
          w-7 h-7 rounded-full flex items-center justify-center text-xs border
          ${
            highlight
              ? "border-indigo-300/40 text-indigo-100"
              : "border-slate-200 dark:border-slate-600 text-slate-400 hover:bg-indigo-50 dark:hover:bg-slate-700"
          }
        `}
        >
          ↗
        </div>
      </div>

      {/* Value */}
      <div
        className={`text-3xl font-extrabold tracking-tight mb-3 ${highlight ? "text-white" : "text-slate-800 dark:text-white"}`}
      >
        {value}
      </div>

      {/* Badge */}
      <div
        className={`flex items-center gap-1.5 text-xs font-medium ${highlight ? "text-indigo-100" : "text-emerald-500"}`}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full ${highlight ? "bg-indigo-200" : "bg-emerald-400"}`}
        />
        {badge}
      </div>
    </div>
  );
};

export default StatCard;
