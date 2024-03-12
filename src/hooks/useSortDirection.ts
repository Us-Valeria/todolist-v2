import { useMemo } from 'react';
import type { Task } from '../models/Task';

const useSortDirection = (tasks: Task[], sortDirection: string) => {
  const directionTasks = useMemo(() => {
    if (!tasks) return [];
    switch (sortDirection) {
      case 'FALSE':
      case 'OLDER':
        return [...tasks];
      case 'UNDER':
        return [...tasks].reverse();
      default:
        throw new Error(`Unknown sorting order: ${sortDirection}`);
    }
  }, [tasks, sortDirection]);

  return directionTasks;
};

export default useSortDirection;
