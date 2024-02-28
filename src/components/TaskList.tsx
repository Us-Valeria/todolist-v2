import React from "react";
import { List } from "antd";
import TaskItem from "./TaskItem";
import type { Task } from "../models/Task";

type Props = {
  tasks: Task[];
};

function TaskList({ tasks }: Props) {
  return (
    <>
      {tasks && tasks.length > 0 ? (
        <List
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
        <p style={{ textAlign: "center" }}>Список задач пуст</p>
      )}
    </>
  );
}

export default TaskList;
