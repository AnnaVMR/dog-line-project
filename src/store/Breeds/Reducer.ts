import { createReducer } from "@reduxjs/toolkit";
import IBreedsState from "./Type";
import { getAllBreeds  } from './ActionCreator';

const initialState: IBreedsState = {
  allBreeds: undefined,
};

const breedsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllBreeds.fulfilled, (state, action) => {
    state.allBreeds = action.payload;
  });

  builder.addCase(getAllBreeds.rejected, (state) => {
    state.allBreeds = [];
  });
});

export default breedsReducer;
