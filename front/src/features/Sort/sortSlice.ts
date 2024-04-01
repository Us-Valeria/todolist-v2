import { createSlice } from '@reduxjs/toolkit';
import { SORTED_KEY } from './models/SortKey';
import { SORTED_DIRECTION } from './models/SortDirection';

const initialState = {
  sortKey: SORTED_KEY.DEFAULT,
  direction: SORTED_DIRECTION.ASC,
};

const sortSlice = createSlice({
  name: 'sorted',
  initialState,
  reducers: {
    setSortKey(state, action) {
      state.sortKey = action.payload;
    },
    setDirection(state, action) {
      state.direction = action.payload;
    },
  },
});

export const { setSortKey, setDirection } = sortSlice.actions;
export default sortSlice.reducer;
