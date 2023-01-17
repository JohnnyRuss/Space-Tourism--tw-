import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TechnologyType } from "../../Interface/types";

interface TechnologyState {
  technologies: TechnologyType[];
}

const technologySlice = createSlice({
  name: "technology",
  initialState: {
    technologies: [],
  } as TechnologyState,
  reducers: {
    setTechnologies(state, { payload }: PayloadAction<TechnologyType[]>) {
      state.technologies = payload;
    },
  },
});

export const technologyReducer = technologySlice.reducer;
export const { setTechnologies } = technologySlice.actions;
