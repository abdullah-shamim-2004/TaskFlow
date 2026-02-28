import React from "react";
// import useAPI from "../../Hooks/useAPI/useAPI";
import { IoMdAdd } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import NormalBtn from "../../Components/Button/NormalBtn/NormalBtn";
import StatCard from "../../Components/Card/StatCard/StatCard";
import useOverview from "../../Hooks/useOverview/useOverview";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import useUsers from "../../Hooks/useUsers/useUsers";
import Loader from "../../Components/Loader/Loader";
import useProducts from "../../Hooks/useProducts/useProducts";

const DashBoardHome = () => {
  // Get the overview from useOverview hook
  const overviews = useOverview();
  const { users, isLoading } = useUsers();
  const { products } = useProducts();
  // loader
  if (isLoading) {
    return <Loader />;
  }
  // slice the users
  const filterUsers = users?.slice(0, 4);
  // slice the products
  const filterProducts = products?.slice(0, 4);
  console.log(filterProducts);

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
      {/* users + products */}
      <div className="flex flex-col md:flex-row justify-between mt-4">
        {/* users */}
        <div className="flex-1 bg-base-100 border border-base-200 rounded-2xl p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-bold text-base-content">Users</h2>
            <Link
              to="/dashboard/users"
              className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              See all <FaArrowRightLong size={11} />
            </Link>
          </div>

          {/* User List */}
          <div className="space-y-1">
            {filterUsers?.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-base-200 transition-colors cursor-pointer"
              >
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>

                {/* Name + Email */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-base-content truncate">
                    {user.name}
                  </p>
                  <p className="text-[11px] text-base-content/50 truncate">
                    {user.email}
                  </p>
                </div>

                {/* Status Badge */}
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0
            ${
              user.status === "active"
                ? "bg-success/10 text-success"
                : "bg-error/10 text-error"
            }`}
                >
                  {user.status === "active" ? "Active" : "Inactive"}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* products */}
        <div className="flex-1 bg-base-100 border border-base-200 rounded-2xl p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-bold text-base-content">Products</h2>
            <Link
              to="/dashboard/products"
              className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              See all <FaArrowRightLong size={11} />
            </Link>
          </div>

          {/* Product List */}
          <div className="space-y-1">
            {filterProducts?.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-base-200 transition-colors cursor-pointer"
              >
                {/* Avatar — first letter of product name */}
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {product.name.charAt(0).toUpperCase()}
                </div>

                {/* Name + Category */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-base-content truncate">
                    {product.name}
                  </p>
                  <p className="text-[11px] text-base-content/50 truncate capitalize">
                    {product.category}
                  </p>
                </div>

                {/* Price + Sales */}
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-bold text-base-content">
                    ${product.price}
                  </p>
                  <p className="text-[10px] text-base-content/50">
                    {product.sales} sales
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
