import React from "react";
// import useAPI from "../../Hooks/useAPI/useAPI";
import { IoMdAdd } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import NormalBtn from "../../Components/Button/NormalBtn/NormalBtn";
import StatCard from "../../Components/Card/StatCard/StatCard";
import useOverview from "../../Hooks/useOverview/useOverview";

const DashBoardHome = () => {
  // Get the overview from useOverview hook
  const overviews = useOverview();
  //   console.log(overviews);

  const state = [
    {
      label: "Total User",
      value: overviews?.totalUsers,
      badge: "↑ Increased from last month",
      highlight: true,
    },
    {
      label: "Active User",
      value: overviews?.activeUsers,
      badge: "↑ Increased from last month",
      highlight: false,
    },
    {
      label: "Revenue",
      value: overviews?.revenue,
      badge: "↑ Increased from last month",
      highlight: false,
    },
    {
      label: "Growth",
      value: overviews?.growth,
      badge: "On Track",
      highlight: false,
    },
  ];
  //   console.log(state);
  // {totalUsers: 12458, activeUsers: 8234, revenue: 245890, growth: 23.5}

  return (
    <div className="p-6 ">
      {/* Header */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start gap-4 mb-4">
        {/* left side */}
        <div>
          <h1 className="text-3xl font-extrabold text-base-content tracking-tight">
            DashBoard
          </h1>
          <p className="text-sm text-base-content mt-1">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        {/* Right side */}
        <div className="flex gap-3 ">
          <NormalBtn
            to="/"
            name="Add Product"
            className="bg-primary "
            icon={<IoMdAdd size={20} />}
          />
          <NormalBtn
            to="/"
            name="Import Data"
            className=""
            icon={<FaDownload size={20} />}
          />
        </div>
      </div>
      {/* Overview Grid */}
      <div className="grid grid-cols-2 gap-2.5 mt-2.5">
        {state.map((item, i) => (
          <StatCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default DashBoardHome;
