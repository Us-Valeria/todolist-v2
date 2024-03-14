import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import useTasks from '../stores/useTasks';
import { FILTER_STATUSES, type FilterStatus } from '../models/FilterStatus';
import useFilter from '../hooks/useFilter';
import useSort from '../hooks/useSort';
import useSortDirection from '../hooks/useSortDirection';
import {
  DIRECTION_STATUSES,
  type DirectionStatus,
} from '../models/DirectionStatus';
import SortTaskList from './SortTaskList';
import SortDirectionList from './SortDirectionList';
import FilterTaskList from './FilterTaskList';
import type { Task } from '../models/Task';
import type { SortedKey } from '../models/SortKey';
import { SORTED_KEY } from '../models/SortKey';

type Props = {
  setList: (list: Task[]) => void;
};

function ListManager({ setList }: Props) {
  const tasks = useTasks((state) => state.tasks);
  const [filter, setFilter] = useState<FilterStatus>(FILTER_STATUSES.ALL);
  const [sortKey, setSortKey] = useState<SortedKey>(SORTED_KEY.DEFAULT);
  const [sortDirection, setSortDirection] = useState<DirectionStatus>(
    DIRECTION_STATUSES.NULL,
  );

  const filteredTasks = useFilter(tasks, filter);
  const sortTasks = useSort(filteredTasks, sortKey);
  const sortDirectionTasks = useSortDirection(sortTasks, sortDirection);

  useEffect(() => {
    setList(sortDirectionTasks);
  }, [sortDirectionTasks, setList]);

  return (
    <Flex justify="space-between">
      <FilterTaskList filter={filter} setFilter={setFilter} />
      <SortDirectionList
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        sortKey={sortKey}
        setSortKey={setSortKey}
      />
      <SortTaskList
        setSortKey={setSortKey}
        setSortDirection={setSortDirection}
      />
    </Flex>
  );
}

export default ListManager;
