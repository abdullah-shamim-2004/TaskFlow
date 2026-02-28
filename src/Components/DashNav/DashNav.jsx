import React from "react";
import { CiMail } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";

const DashNav = () => {
  return (
    <div className="flex w-full justify-end items-center gap-2">
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
        <div className="">
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
            <div className="flex-1 hidden md:block lg:block min-w-0">
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
