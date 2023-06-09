import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import PropertyService from './service';

export const getPropertyAsync = createAsyncThunk(
  actionTypes.GET_PROPERTY,
  async zpid => {
    return PropertyService.getProperty(zpid);
  }
);
