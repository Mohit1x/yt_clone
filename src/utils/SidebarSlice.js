import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
  darkMode: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    closeMenu: (state) => {
      state.value = false;
    },
    toDark: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, closeMenu, toDark } = sidebarSlice.actions;

export default sidebarSlice.reducer;
