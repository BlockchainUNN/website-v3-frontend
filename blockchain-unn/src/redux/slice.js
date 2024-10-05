import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hackerDetails: null,
  hackathon_id: "blockathon",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateHackerDetails: (state, action) => {
      state.hackerDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateHackerDetails } = appSlice.actions;

export default appSlice.reducer;
