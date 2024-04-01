import { configureStore } from '@reduxjs/toolkit';
import { tasksApi } from '../api/tasksApi';
import { filterReducer } from '../features/Filter/filterSlice';
import sortSlice from '../features/Sort/sortSlice';

export const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    filter: filterReducer,
    sorted: sortSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
