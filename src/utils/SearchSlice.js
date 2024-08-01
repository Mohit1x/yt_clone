import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const searchSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    cacheResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { cacheResult } = searchSlice.actions;

export default searchSlice.reducer;
