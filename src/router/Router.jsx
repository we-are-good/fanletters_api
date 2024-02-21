import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

function Router() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            {/* 뒤로가기를 적용하기 위해 replace 입력, Home은 안되는지 확인 */}
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
