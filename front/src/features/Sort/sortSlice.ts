import { createSlice } from '@reduxjs/toolkit';
import type { SortKey } from '../../models/SortKey';
import { SORT_KEY } from '../../models/SortKey';
import type { SortDirection } from '../../models/SortDirection';
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
export default sortSlice.reducer;
