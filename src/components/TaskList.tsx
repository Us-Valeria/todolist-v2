import React from "react";
import { List } from "antd";
import TaskItem from "./TaskItem";
import type { Task } from "../models/Task";

function TaskList({ tasks }: { tasks: Task[] }) {
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
