import React from "react";
import UseAnalytics from "../../Hooks/useAnalytics/UseAnalytics";
import Loader from "../../Components/Loader/Loader";
import AnalyticsCard from "../../Components/Card/AnalyticsCard/AnalyticsCard";
import { FaRegEye } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
import { GiTalk } from "react-icons/gi";
import { IoAnalyticsSharp } from "react-icons/io5";

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
  console.log(totalViews, totalClicks, totalConversations, conversationRate);

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
          📅 Jan 1 – Jan 5, 2024
        </div>
      </div>
      <div className="grid bg-base-100 grid-cols-2 gap-3">
        {analyticsStats.map((data) => (
          <AnalyticsCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Analytics;
