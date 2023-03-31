import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: 0,
};

const loadingProgress = createSlice({
  name: "loading",
  initialState,
  reducers: {
    proChange: (state, {payload}) => {
      state.progress = payload;
    },
  },
});

export default loadingProgress.reducer;
export const loadingActions = loadingProgress.actions;
