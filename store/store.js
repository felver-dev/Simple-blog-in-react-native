import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./posts/postSlice";
import modalReducer from "./modal/modalSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
    modal: modalReducer,
  },
});

export { store };
