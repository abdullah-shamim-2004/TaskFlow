import React from "react";
import { CiMail } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";

const DashNav = () => {
  return (
    <div className="flex w-full justify-between items-center gap-2">
      {/* Search btn */}
      <div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </div>
      {/* Mail + Notification + User */}
      <div className="flex justify-around items-center gap-2">
        {/* Mail  */}
        <div className="">
          <CiMail size={20} />
        </div>
        {/* Notification */}
        <div>
          <IoNotificationsOutline size={20} />
        </div>
        {/* User info */}
        <div className="hidden md:block lg:block">
          {/* User Card */}
          <div className="flex cursor-pointer items-center gap-2 py-3 rounded-xl bg-base-300">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-200 ring-offset-1">
                <img
                  src="https://i.ibb.co.com/rfsbtFGg/IMG-20220810-162239-857.jpg"
                  alt="user"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate leading-none">
                Abdullah Shamim
              </p>
              <p className="text-xs text-base-content/40 truncate mt-0.5">
                abdullahshamim884@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
