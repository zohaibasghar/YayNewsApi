import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: window.location.pathname.split("/")[1] || "general",
};

const category = createSlice({
  name: "category",
  initialState,
  reducers: {
    change: (state, { payload }) => {
      state.category = payload;
    },
  },
});

export default category.reducer;
export const categoryActions = category.actions;
