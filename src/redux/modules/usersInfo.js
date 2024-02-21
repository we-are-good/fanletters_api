import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// [
//   {
//     "userId": "",
//     "nickname": "",
//     "password": "",
//     "success": false
//   }
// ]

const usersInfoSlice = createSlice({
  name: "usersInfo",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newuser = action.payload;
      return [newuser, ...state];
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      return state.filter((user) => user.id !== userId);
    },
  },
});

export const { addUser, deleteUser, editUser } = usersInfoSlice.actions;

export default usersInfoSlice.reducer;
