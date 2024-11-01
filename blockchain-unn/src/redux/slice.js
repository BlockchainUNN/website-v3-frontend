import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hackerDetails: null,
  teamDetails: null,
  hackathon_id: "blockathon",
  blockathon_id: "blockathon",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateHackerDetails: (state, action) => {
      state.hackerDetails = action.payload;
    },
    updateTeamDetails: (state, action) => {
      state.teamDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateHackerDetails, updateTeamDetails } = appSlice.actions;

export default appSlice.reducer;
