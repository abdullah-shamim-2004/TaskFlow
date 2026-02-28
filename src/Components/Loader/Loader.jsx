import React from "react";

const Loader = () => {
  return (
    <div className="text-5xl min-w-[40vw] min-h-[60vh] flex justify-center items-center font-bold text-black">
      L
      <span className="text-primary">
        <span className="loading loading-spinner loading-xl"></span>
      </span>
      ADING
    </div>
  );
};

export default Loader;
