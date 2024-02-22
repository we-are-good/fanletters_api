import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changeContentLetter, createLetter, deleteLetter } from "./letters-api";

const getLettersFromDB = async () => {
  const { data } = await axios.get(
    `http://localhost:5000/letters?_sort=createdAt&_order=desc`
  );
  return data; //payload로 리듀서에 넘어간다.
};

export const __addLetter = createAsyncThunk(
  "__addLetter",
  async (newLetter, thunkAPI) => {
    try {
      const letters = await getLettersFromDB();
      return letters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error); //반드시!
    }
  }
);
export const __getLetters = createAsyncThunk(
  "getLetters",
  async (newLetter, thunkAPI) => {
    try {
      await axios.post(`http://localhost:5000/letters`, newLetter);
      const letters = await getLettersFromDB();
      return letters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteLetters = createAsyncThunk(
  "deleteLetters",
  async (id, thunkAPI) => {
    try {
      const letters = await getLettersFromDB();
      await letters.filter((letter) => letter.id !== id);
      await axios.post(`http://localhost:5000/letters`, letters);
      return letters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
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
const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null,
};
const letterSlice = createSlice({
  name: "letters", //action.type의 prefix
  initialState,
  reducers: {},
  // setLetters: (state, action) => {state.letterData = action.payload;}
  //   addLetter: (state, action) => {
  //     state.letterData.unshift(action.payload);
  //   },
  //   deleteLetter: (state, action) => {
  //     const letterId = action.payload;
  //     return state.filter((letter) => letter.id !== letterId);
  //   },
  //   editLetter: (state, action) => {
  //     const { id, editingText } = action.payload;
  //    const targetLetter = state.letterData.find((letter) => letter.id === id)
  // targetLetter.content = editingText
  //   },

  // },
  extraReducers: (builder) => {
    builder.addCase(__addLetter.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__addLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.letters = action.payload;
    });
    builder.addCase(__addLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload; //catch문으로 걸렸다
    });

    builder.addCase(__getLetters.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__getLetters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.letters = action.payload;
    });
    builder.addCase(__getLetters.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
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
