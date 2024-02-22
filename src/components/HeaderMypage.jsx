import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderTop, TopButton } from "../styles/HeaderMypageStyle";
import { logout } from "../redux/modules/authSlice";

function HeaderMypage() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const getLoginUser = useSelector((state) => state.getLoginUser);
  const id = getLoginUser.id;

  return (
    <HeaderTop>
      <TopButton
        onClick={() => {
          navigation("/");
        }}
      >
        Home
      </TopButton>
      <TopButton
        onClick={() => {
          navigation(`/profile/${id}`);
        }}
      >
        마이페이지
      </TopButton>

      <TopButton
        onClick={() => {
          dispatch(logout());
        }}
      >
        로그아웃
      </TopButton>
    </HeaderTop>
  );
}

export default HeaderMypage;
