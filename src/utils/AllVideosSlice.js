import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allVideo: [],
  filteredVideos: [],
  region: ["IN"],
};

export const AllVideosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    handleAllVideos: (state, action) => {
      state.allVideo = action.payload;
    },
    handleFilteredVideo: (state, action) => {
      state.filteredVideos = action.payload;
    },
    handleRegionApi: (state, action) => {
      state.regin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleAllVideos, handleFilteredVideo, handleRegionApi } =
  AllVideosSlice.actions;

export default AllVideosSlice.reducer;
