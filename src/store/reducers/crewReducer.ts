import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CrewType } from "../../Interface/types";

interface CrewState {
  crew: CrewType[];
}

const crewSlice = createSlice({
  name: "crew",
  initialState: {
    crew: [],
  } as CrewState,
  reducers: {
    setCrewData(state, { payload }: PayloadAction<CrewType[]>) {
      state.crew = payload;
    },
  },
});

export const crewReducer = crewSlice.reducer;
export const { setCrewData } = crewSlice.actions;
