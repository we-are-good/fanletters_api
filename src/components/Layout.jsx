import React from "react";
import HeaderMypage from "./HeaderMypage";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <HeaderMypage />
      <Outlet />
    </>
  );
}

export default Layout;
