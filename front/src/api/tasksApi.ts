import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Task } from '../models/Task';

export const tasksApi = createApi({
  reducerPath: 'taskApi',
  tagTypes: ['Tasks'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => 'tasks',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Tasks' as const, _id })),
              { type: 'Tasks', id: 'LIST' },
            ]
          : [{ type: 'Tasks', id: 'LIST' }],
    }),

    addTask: builder.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: 'tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    updateTask: builder.mutation<Task, Partial<Task>>({
      query: ({ _id, ...value }) => ({
        url: `tasks/update/${_id}`,
        method: 'PUT',
        body: { ...value },
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({ url: `tasks/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    updateOrderList: builder.mutation({
      query: (body) => ({
        url: 'tasks',
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useUpdateOrderListMutation,
} = tasksApi;
