import React from 'react';
import type { GlobalToken } from 'antd';
import { List, theme } from 'antd';
import { css } from '@emotion/react';
import TaskItem from './TaskItem';
import useFilterTasks from '../hooks/useFilterTasks';
import useFilter from '../stores/useFilter';
import useTasks from '../stores/useTasks';
import useSelectedSort from '../stores/useSelectedSort';
import useSort from '../hooks/useSort';
import useSortDirection from '../hooks/useSortDirection';

const styles = (token: GlobalToken) => ({
  list: css`
    margin-top: ${token.marginXS}px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 75vh;
  `,
});

function TaskList() {
  const { token } = theme.useToken();

  const tasks = useTasks((state) => state.tasks);
  const { filter } = useFilter();
  const { sortKey } = useSelectedSort();
  const { direction } = useSelectedSort();

  const filteredTaskList = useFilterTasks(tasks, filter);
  const sortedList = useSort(filteredTaskList, sortKey);
  const sortDirectionList = useSortDirection(sortedList, direction);
  return (
    <List
      css={styles(token).list}
      size="large"
      bordered
      dataSource={sortDirectionList}
      renderItem={(task) => <TaskItem key={task.id} task={task} />}
      locale={{ emptyText: 'Список пуст' }}
    />
  );
}

export default TaskList;
