import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderTop, TopButton } from "../styles/HeaderMypageStyle";

function HeaderMypage() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const getLoginUser = useSelector((state) => state.getLoginUser);
  const id = getLoginUser.id;

  const logOut = async () => {
    await dispatch(getLoginUser(""));
    navigation("/");
  };

  return (
    <HeaderTop>
      <TopButton
        onClick={() => {
          navigation("/home");
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
          logOut();
        }}
      >
        로그아웃
      </TopButton>
    </HeaderTop>
  );
}

export default HeaderMypage;
