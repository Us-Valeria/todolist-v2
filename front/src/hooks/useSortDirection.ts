import { useMemo } from 'react';
import type { Task } from '../models/Task';
import { SORTED_DIRECTION } from '../models/SortDirection';

const useSortDirection = (tasks: Task[], sortDirection: string) => {
  const directionTasks = useMemo(() => {
    if (!tasks) return [];
    switch (sortDirection) {
      case SORTED_DIRECTION.ASC:
        return [...tasks];
      case SORTED_DIRECTION.DESC:
        return [...tasks].reverse();
      default:
        throw new Error(`Unknown sorting order: ${sortDirection}`);
    }
  }, [tasks, sortDirection]);

  return directionTasks;
};

export default useSortDirection;
