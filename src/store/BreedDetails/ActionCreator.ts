import { createAsyncThunk } from "@reduxjs/toolkit";
import OneBreedInfoType from './ActionType';
import getOneBreed from '../../Api/getOneBreed';

export const getBreedInfo = createAsyncThunk(OneBreedInfoType.getOneBreedInfo, (id: string) => getOneBreed(id));
