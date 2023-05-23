import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
