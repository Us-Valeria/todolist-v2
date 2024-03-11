import React from 'react';
import type { GlobalToken } from 'antd';
import { List, theme } from 'antd';
import { css } from '@emotion/react';
import TaskItem from './TaskItem';
import type { Task } from '../models/Task';

type Props = {
  tasks: Task[];
};

const styles = (token: GlobalToken) => ({
  list: css`
    margin-top: ${token.marginXS}px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 75vh;
  `,
});

function TaskList({ tasks }: Props) {
  const { token } = theme.useToken();
  return (
    <List
      css={styles(token).list}
      size="large"
      bordered
      dataSource={tasks}
      renderItem={(task) => <TaskItem key={task.id} task={task} />}
      locale={{ emptyText: 'Список пуст' }}
    />
  );
}

export default TaskList;
