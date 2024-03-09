import React, { useState, useMemo } from 'react';
import type { GlobalToken, RadioChangeEvent } from 'antd';
import { Radio, theme } from 'antd';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import TaskList from './TaskList';
import useTasks from '../stores/useTasks';
import AddTask from './AddTask';
import { FILTER_STATUSES } from '../models/FilterStatus';
import type { FilterStatus } from '../models/FilterStatus';

const styles = (token: GlobalToken) => ({
  content: css`
    margin-top: ${token.marginLG}px;
  `,
  list: css`
    margin-top: ${token.marginXXS}px;
  `,
});

function FilterTaskList() {
  const { token } = theme.useToken();
  const tasks = useTasks((state) => state.tasks);
  const [filter, setFilter] = useState<FilterStatus>('ALL');

  const StyledTaskList = styled(TaskList)`
    ${styles(token).list}
  `;

  const filteredTasks = useMemo(() => {
    if (!tasks) return [];
    switch (filter) {
      case 'ALL':
        return tasks;
      case 'ACTIVE':
        return tasks.filter((task) => !task.completed);
      case 'COMPLETED':
        return tasks.filter((task) => task.completed);
      default:
        throw new Error(`Unknown status: ${filter}`);
    }
  }, [tasks, filter]);

  const onChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value as FilterStatus);
  };

  return (
    <div css={styles(token).content}>
      <AddTask />
      <Radio.Group value={filter} onChange={onChange}>
        {Object.values(FILTER_STATUSES).map((status) => (
          <Radio.Button key={status} value={status}>
            {status === 'ALL' && 'Все'}
            {status === 'ACTIVE' && 'В процессе'}
            {status === 'COMPLETED' && 'Завершенные'}
          </Radio.Button>
        ))}
      </Radio.Group>
      <StyledTaskList tasks={filteredTasks} />
    </div>
  );
}

export default FilterTaskList;
