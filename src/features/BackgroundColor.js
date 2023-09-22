import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "#ECEBF0",
};

export const counterSlice = createSlice({
  name: "bg",
  initialState,
  reducers: {
    updateBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateBgColor } = counterSlice.actions;

export default counterSlice.reducer;
