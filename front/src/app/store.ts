import { configureStore } from '@reduxjs/toolkit';
import { tasksApi } from '../api/tasksApi';
import { filterReducer } from '../features/Filter/filterSlice';
import { sortReducer } from '../features/Sort/sortSlice';
import { themeReducer } from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    filter: filterReducer,
    sort: sortReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
