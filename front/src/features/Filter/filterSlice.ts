import { createSlice } from '@reduxjs/toolkit';
import { FILTER } from './models/Filter';

const filterSlice = createSlice({
  name: 'filter',
  initialState: FILTER.ALL,
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
