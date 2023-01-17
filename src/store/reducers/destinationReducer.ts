import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DestinationType } from "../../Interface/types";

interface DestinationStateType {
  destinations: DestinationType[];
}

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    destinations: [],
  } as DestinationStateType,
  reducers: {
    setDestinations(state, { payload }: PayloadAction<DestinationType[]>) {
      state.destinations = payload;
    },
  },
});

export const destinationReducer = destinationSlice.reducer;
export const { setDestinations } = destinationSlice.actions;
