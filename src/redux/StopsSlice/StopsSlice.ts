import { createSlice } from "@reduxjs/toolkit";

interface StopsState {
  stops: string[];
}

const initialState: StopsState = {
  stops: ["all"],
};

const stopsSlice = createSlice({
  name: "stops",
  initialState,
  reducers: {
    setStops(state, action) {
      state.stops = action.payload;
    },
  },
});

export const { setStops } = stopsSlice.actions;
export default stopsSlice.reducer;
