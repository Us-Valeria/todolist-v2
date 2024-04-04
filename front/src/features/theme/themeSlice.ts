import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

const loadThemeFromLocalStorage = () => {
  const isDark = localStorage.getItem('isDark');
  return isDark ? JSON.parse(isDark) : false;
};

const saveThemeToLocalStorage = (isDark: boolean) => {
  localStorage.setItem('isDark', JSON.stringify(isDark));
};

type State = {
  isDark: boolean;
};

const initialState: State = {
  isDark: loadThemeFromLocalStorage(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.isDark = !state.isDark;
      saveThemeToLocalStorage(state.isDark);
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.isDark;
export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
