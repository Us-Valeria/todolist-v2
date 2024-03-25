import { create } from 'zustand';
import type { Task } from '../models/Task';
import axios from '../utils/axios';

type TasksStore = {
  tasks: Task[];
  loading: boolean;
  createTask: (title: string) => void;
  removeTask: (taskId: string) => void;
  changeTask: (
    values: { title: string; text: string; completed: boolean },
    taskId: string,
  ) => void;
  fetchTasks: () => void;
};

const useTasks = create<TasksStore>((set) => ({
  tasks: [],
  loading: false,

  createTask: async (title: string) => {
    try {
      const res = await axios.post('/', { title });
      const createdData = res.data;
      set((state) => ({
        tasks: [...state.tasks, createdData],
      }));
    } catch (error) {
      throw new Error('Failed to create tasks');
    }
  },

  removeTask: async (taskId: string) => {
    try {
      await axios.delete(`/${taskId}`);
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      }));
    } catch (error) {
      throw new Error('Failed to delete tasks');
    }
  },

  changeTask: async (values, taskId) => {
    try {
      const res = await axios.put(`/${taskId}`, values);
      const updatedItem = res.data;
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? updatedItem : task,
        ),
      }));
    } catch (error) {
      throw new Error('Failed to update tasks');
    }
  },

  fetchTasks: async () => {
    set({ loading: true });
    try {
      const result = await axios.get('/');
      set({
        tasks: result.data,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
      });
      throw new Error('Failed to fetch tasks');
    }
  },
}));

export default useTasks;
