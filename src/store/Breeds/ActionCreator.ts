import { createAsyncThunk } from "@reduxjs/toolkit";
import BreedsActionType from './ActionType';
import getBreeds from "../../Api/getBreeds";

export const getAllBreeds = createAsyncThunk( BreedsActionType.GetAll, (page: number) => getBreeds(page));
