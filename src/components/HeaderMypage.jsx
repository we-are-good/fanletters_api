import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderTop, TopButton } from "../styles/HeaderMypageStyle";
import { Cookies } from "react-cookie";
import axios from "axios";

function HeaderMypage() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const BASE_URL = `https://moneyfulpublicpolicy.co.kr`;

  const goToMypage = () => {
    return navigation(`/profile`);
  };

  const cookies = new Cookies();

  const logOut = async () => {
    //   const assessToken = cookies.delete(`assessToken`);
    //   console.log("assessToken", assessToken);
    //   const response = await axios.get(`${BASE_URL}/letters`, {});
    //   console.log("response", response);
    //   setData(response.data.data);
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
          navigation("/profile");
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
