import { useMemo } from 'react';
import dayjs from 'dayjs';
import type { Task } from '../models/Task';
import { SORTED_KEY } from '../models/SortKey';

const useSort = (tasks: Task[], sortKey: string) => {
  const sortTasks = useMemo(() => {
    if (!tasks) return [];
    switch (sortKey) {
      case SORTED_KEY.DEFAULT:
        return tasks;
      case SORTED_KEY.DATE:
        return [...tasks].sort((a, b) =>
          dayjs(a.created).diff(dayjs(b.created)),
        );
      case SORTED_KEY.TITLE:
        return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
      default:
        throw new Error(`Unknown sorting order: ${sortKey}`);
    }
  }, [tasks, sortKey]);
  return sortTasks;
};
export default useSort;
