import { createSlice } from '@reduxjs/toolkit';
import { SORT_KEY } from '../../models/Sorting';
import type { SortDirection, SortKey } from '../../models/Sorting';
import type { RootState } from '../../app/store';

type State = {
  key: SortKey;
  direction: SortDirection | null;
};

const initialState: State = {
  key: SORT_KEY.DEFAULT,
  direction: null,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action) {
      state.key = action.payload.key;
      state.direction = action.payload.direction;
    },
  },
});

export const selectSort = (state: RootState) => state.sort;
export const { setSort } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
