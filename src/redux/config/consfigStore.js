import { configureStore } from "@reduxjs/toolkit";
import letterReducer from "../modules/letters";
import memberReducer from "../modules/member";
import getLoginUserReducer from "../modules/loginuser";

const store = configureStore({
  reducer: {
    letters: letterReducer,
    member: memberReducer,
    getLoginUser: getLoginUserReducer,
  },
});
export default store;
