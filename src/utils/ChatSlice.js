import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: [],
};

export const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    storeChat: (state, action) => {
      state.message.splice(25, 1);

      state.message.unshift(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeChat } = ChatSlice.actions;

export default ChatSlice.reducer;
