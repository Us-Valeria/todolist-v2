import { useMemo } from 'react';
import type { Task } from '../../models/Task';

const useFilterTasks = (tasks: Task[], filter: string) => {
  const filteredTasks = useMemo(() => {
    if (!tasks) return [];
    switch (filter) {
      case 'ALL':
        return tasks;
      case 'ACTIVE':
        return tasks.filter((task) => !task.completed);
      case 'COMPLETED':
        return tasks.filter((task) => task.completed);
      default:
        throw new Error(`Unknown status: ${filter}`);
    }
  }, [tasks, filter]);
  return filteredTasks;
};

export default useFilterTasks;
