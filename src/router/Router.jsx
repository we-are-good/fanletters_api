import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        {/* 뒤로가기를 적용하기 위해 replace 입력, Home은 안되는지 확인 */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
