import { useMemo } from 'react';
import type { Task } from '../models/Task';
import { DIRECTION_STATUSES } from '../models/DirectionStatus';

const useSortDirection = (tasks: Task[], sortDirection: string) => {
  const directionTasks = useMemo(() => {
    if (!tasks) return [];
    switch (sortDirection) {
      case DIRECTION_STATUSES.NULL:
      case DIRECTION_STATUSES.ASC:
        return [...tasks];
      case DIRECTION_STATUSES.DESK:
        return [...tasks].reverse();
      default:
        throw new Error(`Unknown sorting order: ${sortDirection}`);
    }
  }, [tasks, sortDirection]);

  return directionTasks;
};

export default useSortDirection;
