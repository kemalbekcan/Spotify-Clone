import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  current: false,
  controls: false,
  playing: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurent, setControls, setPlaying } = playerSlice.actions;

export default playerSlice.reducer;
