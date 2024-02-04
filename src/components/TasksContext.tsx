import React, { ReactNode, createContext, useReducer } from "react";
import type { Task } from "./Task";

export const TasksContext = createContext<Task[] | null>(null);
export const TasksDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);

type Props = {
  children: ReactNode;
};

export function TasksProvider({ children }: Props) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

type Action = {
  type: "added" | "changed" | "deleted";
  task: Task;
};

function tasksReducer(tasks: Task[], action: Action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.task.id,
          text: action.task.text,
          completed: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.task.id);
    }
    default:
      throw new Error("Unknown action: " + action.type);
  }
}
