import { useMemo } from 'react';
import type { Task } from '../../models/Task';
import type { SortDirection } from '../../models/SortDirection';
import { SORT_DIRECTION } from '../../models/SortDirection';

const useSortDirection = (tasks: Task[], sortDirection: SortDirection) => {
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
