import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./SidebarSlice";
import searchReducer from "./SearchSlice";
import AllVideosReducer from "./AllVideosSlice";
import ChatReducer from "./ChatSlice";

const Store = configureStore({
  reducer: {
    sidebar: SidebarReducer,
    search: searchReducer,
    videos: AllVideosReducer,
    chat: ChatReducer,
  },
});

export default Store;
