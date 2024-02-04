import { List } from "antd";
import TaskItem from "./TaskItem";
import React, { useContext } from "react";
import { TasksContext } from "./TasksContext";
import type { Task } from "./Task";

function TaskList() {
  const tasks: Task[] | null = useContext(TasksContext);
  return (
    tasks && (
      <List
        size="small"
        bordered
        dataSource={tasks}
        renderItem={(task: Task) => (
          <List.Item>
            <TaskItem key={task.id} task={task} />
          </List.Item>
        )}
      />
    )
  );
}
export default TaskList;
