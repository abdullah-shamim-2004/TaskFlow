import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-screen-2xl w-full mx-auto ">
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
