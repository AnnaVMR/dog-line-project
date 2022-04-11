import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import breedsReducer from './Breeds/Reducer';
import breedOneReducer from './BreedDetails/Reducer';

export const store = configureStore({
  reducer: {
    GetAllBreeds: breedsReducer,
    GetOneBreed: breedOneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
