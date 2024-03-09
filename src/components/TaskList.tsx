import React from 'react';
import { List } from 'antd';
import { css } from '@emotion/react';
import TaskItem from './TaskItem';
import type { Task } from '../models/Task';

type Props = {
  tasks: Task[];
};

const styles = {
  list: css`
    display: flex;
    flex-direction: column-reverse;
  `,
};

function TaskList({ tasks }: Props) {
  return (
    <List
      css={styles.list}
      size="large"
      bordered
      dataSource={tasks}
      renderItem={(task) => <TaskItem key={task.id} task={task} />}
      locale={{ emptyText: 'Список пуст' }}
    />
  );
}

export default TaskList;
