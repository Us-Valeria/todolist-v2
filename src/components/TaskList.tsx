import React from "react";
import { List, Col, Row, GlobalToken, theme } from "antd";
import TaskItem from "./TaskItem";
import type { Task } from "../models/Task";
import AddTask from "./AddTask";
import { css } from "@emotion/react";

type Props = {
  tasks: Task[];
};
const styles = (token: GlobalToken) => ({
  list: css`
    display: flex;
    flex-direction: column-reverse;
    background-color: ${token.colorBorderBg};
  `,
  text: css`
    font-size: 2rem;
    color: ${token.colorTextLabel};
    text-transform: uppercase;
  `,
});

function TaskList({ tasks }: Props) {
  const { token } = theme.useToken();
  return (
    <>
      {tasks && tasks.length > 0 ? (
        <List
          css={styles(token).list}
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
        <Row>
          <Col flex={2}>
            <AddTask />
          </Col>
          <Col flex={3}>
            <p css={styles(token).text}>Список пуст</p>
          </Col>
        </Row>
      )}
    </>
  );
}

export default TaskList;
