import React from "react";
import { List } from "antd";
import TaskItem from "./TaskItem";
import type { Task } from "../models/Task";
import { css } from "@emotion/react";

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
  return tasks && tasks.length > 0 ? (
    <List
      css={styles.list}
      size="large"
      bordered
      dataSource={tasks}
      renderItem={(task) => <TaskItem key={task.id} task={task} />}
    />
  ) : null;
}

export default TaskList;
