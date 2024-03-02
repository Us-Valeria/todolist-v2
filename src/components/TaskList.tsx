import React from "react";
import { List } from "antd";
import TaskItem from "./TaskItem";
import type { Task } from "../models/Task";
import AddTask from "./AddTask";
import { css } from "@emotion/react";

type Props = {
  tasks: Task[];
};
const styles = {
  list: css`
    display: flex;
    flex-direction: column-reverse;
    background-color: white;
  `,
  isNan: css`
    margin-top: 1%;
    display: flex;
    flex-direction: row;
  `,
  text: css`
    text-align: center;
    font-size: 2rem;
    color: #24295bc1;
    text-transform: uppercase;
    flex-basis: 85%;
  `,
};

function TaskList({ tasks }: Props) {
  return (
    <>
      {tasks && tasks.length > 0 ? (
        <List
          css={styles.list}
          header={<AddTask />}
          size="large"
          bordered
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item>
              <TaskItem key={task.id} task={task} />
            </List.Item>
          )}
        />
      ) : (
        <div css={styles.isNan}>
          <AddTask />
          <p css={styles.text}>Список пуст</p>
        </div>
      )}
    </>
  );
}

export default TaskList;
