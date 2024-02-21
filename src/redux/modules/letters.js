import fakeData from "../../fakeData.json";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  changeContentLetter,
  createLetter,
  deleteLetter,
  getLetters,
} from "./letters-api";
const initialState = fakeData;

export const getLettersThunk = createAsyncThunk(
  "letter/getLetters",
  getLetters
);
export const createLetterThunk = createAsyncThunk(
  "letter/createLetter",
  createLetter
);
export const deleteLetterThunk = createAsyncThunk(
  "letter/deleteLetter",
  deleteLetter
);

export const changeContentThunk = createAsyncThunk(
  "letter/changeContentLetter",
  async (id, editingText, { getState }) => {
    const state = getState();
    console.log(state);
    // const { todos } = state.letters;

    await changeContentLetter(id, {
      content: editingText,
    });
    return id; //다시
  }
);

const letterSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {},
  //   addLetter: (state, action) => {
  //     state.push(action.payload);
  //   },
  //   deleteLetter: (state, action) => {
  //     const letterId = action.payload;
  //     return state.filter((letter) => letter.id !== letterId);
  //   },
  //   editLetter: (state, action) => {
  //     const { id, editingText } = action.payload;
  //     return state.map((letter) => {
  //       if (letter.id === id) {
  //         return { ...letter, content: editingText };
  //       }
  //       return letter;
  //     });
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getLettersThunk.fulfilled, (state, action) => {
      state.letters = action.payload;
    });
    builder.addCase(createLetterThunk.fulfilled, (state, action) => {
      state.letters.push(action.payload);
    });
    builder.addCase(deleteLetterThunk.fulfilled, (state, action) => {
      const targetIndex = state.letters.findIndex(
        (todo) => todo.id === action.payload
      );
      state.letters.splice(targetIndex, 1);
    });
  },
});

// export const { addLetter, deleteLetter, editLetter } = letterSlice.actions;

export default letterSlice.reducer;
