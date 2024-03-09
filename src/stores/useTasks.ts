import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import dayjs from 'dayjs';
import type { Task } from '../models/Task';

type TasksStore = {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (taskId: string) => void;
  changeTask: (
    values: { title: string; description: string },
    taskId: string,
  ) => void;
  changeStatusTask: (taskId: string) => void;
};

const useTasks = create(
  persist<TasksStore>(
    (set) => ({
      tasks: [],
      addTask: (title: string) => {
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: String(Date.now()),
              title,
              description: '',
              completed: false,
              created: dayjs().format(),
            },
          ],
        }));
      },

      removeTask: (taskId) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        }));
      },

      changeTask: (values, taskId) => {
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                title: values.title,
                description: values.description,
              };
            }
            return task;
          }),
        }));
      },

      changeStatusTask: (taskId) => {
        set((state) => ({
          tasks: state.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          }),
        }));
      },
    }),
    { name: 'task', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useTasks;
