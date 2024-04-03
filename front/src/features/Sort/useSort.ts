import { useMemo } from 'react';
import dayjs from 'dayjs';
import type { Task } from '../../models/Task';
import type { SortKey } from '../../models/SortKey';
import { SORT_KEY } from '../../models/SortKey';

const useSort = (tasks: Task[], key: SortKey) => {
  const sortTasks = useMemo(() => {
    if (!tasks) return [];
    switch (key) {
      case SORT_KEY.DEFAULT:
        return tasks;
      case SORT_KEY.DATE:
        return [...tasks].sort((a, b) =>
          dayjs(a.createdAt).diff(dayjs(b.createdAt)),
        );
      case SORT_KEY.TITLE:
        return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
      default:
        throw new Error(`Unknown sorting order: ${key}`);
    }
  }, [tasks, key]);
  return sortTasks;
};
export default useSort;
