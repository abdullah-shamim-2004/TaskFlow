import React from "react";
import { Link } from "react-router";

const NormalBtn = ({ to, name, className, icon }) => {
  return (
    <Link
      to={to}
      className={` flex items-center gap-2 text-base-content text-sm font-semibold px-2 md:px-4 py-1 md:py-2 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg  ${className}`}
    >
      <span>{icon}</span> {name}
    </Link>
  );
};

export default NormalBtn;
