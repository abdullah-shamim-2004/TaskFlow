import React from "react";
// import { MdSchool } from "react-icons/md";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="group flex items-center gap-2 transition-all active:scale-95"
      >
        <div className="">
          {/* <MdSchool className="text-white text-xl sm:text-2xl" /> */}
        </div>
        <span className="text-xl sm:text-2xl font-black tracking-tighter flex items-center">
          <span className="text-base-content">Task</span>
          <span className="relative">
            <span className="text-primary ml-0.5">Flow</span>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
