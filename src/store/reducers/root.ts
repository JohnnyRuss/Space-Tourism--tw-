import { combineReducers } from "@reduxjs/toolkit";
import { homeReducer } from "./homeRecucer";
import { destinationReducer } from "./destinationReducer";
import { crewReducer } from "./crewReducer";
import { technologyReducer } from "./technologyReducer";

export const rootReducer = combineReducers({
  home: homeReducer,
  destination: destinationReducer,
  crew: crewReducer,
  technologies: technologyReducer,
});
