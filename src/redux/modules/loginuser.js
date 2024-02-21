import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const getLoginUserSlice = createSlice({
  name: "getLoginUser",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      const loginUser = action.payload;
      return loginUser;
    },
  },
});

export const { loginUser } = getLoginUserSlice.actions;
export default getLoginUserSlice.reducer;
