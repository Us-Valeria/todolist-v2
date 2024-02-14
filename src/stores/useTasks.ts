import { create } from "zustand";
import { Task } from "../models/Task";

type TasksStore = {
  tasks: Task[];
  addTask: ({ text }: { text: string }) => void;
  removeTask: (taskId: string) => void;
  changeTextTask: (value: string, taskId: string) => void;
  changeStatusTask: (taskId: string) => void;
};

export const useTasks = create<TasksStore>((set) => ({
  tasks: [],

  addTask: ({ text }: { text: string }) => {
    if (text.trim()) {
      set((state) => ({
        tasks: [
          ...state.tasks,
          {
            id: String(Date.now()),
            text: text,
            completed: false,
          },
        ],
      }));
    }
  },

  removeTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
  },

  changeTextTask: (value, taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, text: value };
        } else {
          return task;
        }
      }),
    }));
  },

  changeStatusTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    }));
  },
}));
