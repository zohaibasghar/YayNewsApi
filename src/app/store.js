import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import loadingReducer from "../features/loadingBar/loadingProgressSlice";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    loading: loadingReducer,
  },
});

export default store;
