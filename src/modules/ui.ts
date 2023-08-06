import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  chapter: string;
}

const initialState: State = {
  chapter: "Default",
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setChapter: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.chapter = action.payload;
    },
  },
});

export const actions = {
  ...slice.actions,
};

export const { reducer } = slice;
