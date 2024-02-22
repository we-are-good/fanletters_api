import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const getLoginUserSlice = createSlice({
  name: "getLoginUser",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      const getLoginUser = action.payload;
      return getLoginUser;
    },
  },
});

export const { getLoginUser } = getLoginUserSlice.actions;
export default getLoginUserSlice.reducer;
