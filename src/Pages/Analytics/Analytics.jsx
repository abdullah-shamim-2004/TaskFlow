import React from "react";
import UseAnalytics from "../../Hooks/useAnalytics/UseAnalytics";
import Loader from "../../Components/Loader/Loader";
import AnalyticsCard from "../../Components/Card/AnalyticsCard/AnalyticsCard";
import { FaRegEye } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
import { GiTalk } from "react-icons/gi";
import { IoAnalyticsSharp } from "react-icons/io5";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const { analyticsData, isLoading } = UseAnalytics();
  //   {date: '2024-01-01', views: 1234, clicks: 456, conversions: 23}
  if (isLoading) {
    return <Loader />;
  }
  // findout total views , total Clicks , total conversation and conversation rate
  const totalViews = analyticsData.reduce((accu, curr) => accu + curr.views, 0);
  const totalClicks = analyticsData.reduce(
    (accu, curr) => accu + curr.clicks,
    0,
  );
  const totalConversations = analyticsData.reduce(
    (accu, curr) => accu + curr.conversions,
    0,
  );
  const conversationRate = ((totalConversations / totalViews) * 100).toFixed();
  // make a new array to display it on analytics page
  const analyticsStats = [
    {
      label: "Total Views",
      value: totalViews.toLocaleString(),
      icon: <FaRegEye />,
      sub: "This week",
      color: "bg-primary",
    },
    {
      label: "Total Clicks",
      value: totalClicks.toLocaleString(),
      icon: <LuMousePointerClick />,
      sub: "This week",
      color: "bg-base-200",
    },
    {
      label: "Total Conversions",
      value: totalConversations.toLocaleString(),
      icon: <GiTalk />,
      sub: "This week",
      color: "bg-base-200",
    },
    {
      label: "Conversion Rate",
      value: `${conversationRate}%`,
      icon: <IoAnalyticsSharp />,
      sub: "This week",
      color: "bg-base-200",
    },
  ];
  // console.log(totalViews, totalClicks, totalConversations, conversationRate);

  return (
    <div className="p-6 md:p-8">
      {/* ── Header ── */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-base-content tracking-tight">
            Analytics
          </h1>
          <p className="text-sm text-base-content mt-1">
            Track views, clicks, and conversions over time.
          </p>
        </div>

        {/* Date Range Badge */}
        <div className="flex items-center gap-2 bg-base-300 border border-base-200 px-4 py-2 rounded-xl text-sm font-semibold text-base-content shadow-sm">
          Jan 1 – Jan 5, 2024
        </div>
      </div>
      <div className="grid bg-base-100 grid-cols-2 gap-3">
        {analyticsStats.map((data, index) => (
          <AnalyticsCard key={index} data={data} />
        ))}
      </div>

      {/* Line chart */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/60 shadow-sm mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div>
            <h2 className="text-sm font-bold text-slate-700 dark:text-white">
              📈 Views Over Time
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Daily page views from Jan 1 – Jan 5
            </p>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-4">
            {[
              { color: "#6366f1", label: "Views" },
              { color: "#06b6d4", label: "Clicks" },
              { color: "#10b981", label: "Conversions" },
            ].map((l, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <div
                  className="w-3 h-0.5 rounded-full"
                  style={{ background: l.color }}
                />
                <span className="text-[11px] text-slate-400 font-medium">
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ResponsiveContainer className={"mt-5"} width="100%" height={260}>
          <LineChart
            data={analyticsData}
            margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f1f5f9"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            {/* <Tooltip content={<CustomTooltip />} /> */}

            <Line
              type="monotone"
              dataKey="views"
              stroke="#6366f1"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#6366f1", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#6366f1" }}
            />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#06b6d4"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#06b6d4", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#06b6d4" }}
            />
            <Line
              type="monotone"
              dataKey="conversions"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#10b981", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#10b981" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
