import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeType } from "../../Interface/types";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    title: "",
    subTitle: "",
    description: "",
  } as HomeType,
  reducers: {
    setHomeData(state, { payload }: PayloadAction<HomeType>) {
      //   console.log(payload);
      state.title = payload.title;
      state.subTitle = payload.subTitle;
      state.description = payload.description;
      //   Object.keys(payload).map((key) => (state[key] = payload[key]));
    },
  },
});

export const homeReducer = homeSlice.reducer;
export const { setHomeData } = homeSlice.actions;
