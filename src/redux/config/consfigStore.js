import { configureStore } from "@reduxjs/toolkit";
import letterReducer from "../modules/letters";
import memberReducer from "../modules/member";

const store = configureStore({
  reducer: {
    letters: letterReducer,
    member: memberReducer,
  },
});
export default store;
