import { configureStore } from "@reduxjs/toolkit";
import letters from "../modules/letterSlice";
import member from "../modules/memberSlice";
import getLoginUser from "../modules/getLoginUserSlice";
import auth from "../modules/authSlice";

const store = configureStore({
  reducer: {
    letters,
    member,
    getLoginUser,
    auth,
  },
});
export default store;
