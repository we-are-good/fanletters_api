import { createSlice } from "@reduxjs/toolkit";
const initialState = "Ava Max";

const memberSlice = createSlice({
  name: "member", //액션 type의 slice와 같다.
  initialState,
  reducers: {
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    },
  },
});

export const { setMember } = memberSlice.actions; //액션크리에이터
export default memberSlice.reducer;
