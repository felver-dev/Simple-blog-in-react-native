import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setToTrue(state, action) {
      state.isOpened = action.payload;
    },
    setToFalse(state, action) {
      state.isOpened = action.payload;
    },
  },
});

export const selectModalState = (state) => state.modal.isOpened;
export const { setToFalse, setToTrue } = modalSlice.actions;
export default modalSlice.reducer;
