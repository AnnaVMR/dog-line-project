import { createReducer } from "@reduxjs/toolkit";
import { getBreedInfo } from './ActionCreator';
import IBreedInfoState from './Type';



const initialState: IBreedInfoState = {
  breed: undefined,
};

const breedOneReducer = createReducer(initialState, (builder) => {
  builder.addCase(getBreedInfo.fulfilled, (state, action) => {
      state.breed = action.payload;
  });
});

export default breedOneReducer;
