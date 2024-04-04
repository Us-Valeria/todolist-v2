import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

type State = {
  isDark: boolean;
};

const initialState: State = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.isDark;
export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
