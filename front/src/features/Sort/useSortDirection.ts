import { useMemo } from 'react';
import type { Task } from '../../models/Task';
import { SORT_DIRECTION, type SortDirection } from '../../models/Sorting';

const useSortDirection = (
  tasks: Task[],
  sortDirection: SortDirection | null,
): Task[] => {
  const directionTasks = useMemo(() => {
    if (!tasks) return [];
    switch (sortDirection) {
      case null:
        return tasks;
      case SORT_DIRECTION.ASC:
        return [...tasks];
      case SORT_DIRECTION.DESC:
        return [...tasks].reverse();
      default:
        throw new Error(`Unknown sorting order: ${sortDirection}`);
    }
  }, [tasks, sortDirection]);

  return directionTasks;
};

export default useSortDirection;
