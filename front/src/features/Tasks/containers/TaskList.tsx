import React from 'react';
import type { GlobalToken } from 'antd';
import { List, theme } from 'antd';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import TaskItem from '../components/TaskItem';
import useFilterTasks from '../../Filter/hooks/useFilterTasks';
import useSort from '../../Sort/hooks/useSort';
import useSortDirection from '../../Sort/hooks/useSortDirection';
import { useGetTasksQuery } from '../../../api/tasksApi';
import type { RootState } from '../../../app/store';

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

  const { data = [], isLoading } = useGetTasksQuery();
  const filter = useSelector((state: RootState) => state.filter);
  const { sortKey, direction } = useSelector(
    (state: RootState) => state.sorted,
  );

  const filteredTaskList = useFilterTasks(data, filter);
  const sortedList = useSort(filteredTaskList, sortKey);
  const sortDirectionList = useSortDirection(sortedList, direction);
  return (
    <List
      css={styles(token).list}
      size="large"
      bordered
      loading={isLoading}
      dataSource={sortDirectionList}
      renderItem={(task) => <TaskItem key={task._id} task={task} />}
      locale={{ emptyText: 'Список пуст' }}
    />
  );
}

export default TaskList;
