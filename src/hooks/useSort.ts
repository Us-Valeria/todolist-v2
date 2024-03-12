import { useMemo } from 'react';
import dayjs from 'dayjs';
import type { Task } from '../models/Task';

const useSort = (tasks: Task[], sortKey: string) => {
  const sortTasks = useMemo(() => {
    if (!tasks) return [];
    switch (sortKey) {
      case 'default':
        return tasks;
      case 'date':
        return [...tasks].sort((a, b) =>
          dayjs(a.created).diff(dayjs(b.created)),
        );
      case 'title':
        return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
      default:
        throw new Error(`Unknown sorting order: ${sortKey}`);
    }
  }, [tasks, sortKey]);
  return sortTasks;
};
export default useSort;
