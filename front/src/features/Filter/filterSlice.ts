import { createSlice } from '@reduxjs/toolkit';
import type { Filters } from '../../models/Filter';
import { FILTER } from '../../models/Filter';
import type { RootState } from '../../app/store';

const filterSlice = createSlice({
  name: 'filter',
  initialState: <Filters>FILTER.ALL,
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
