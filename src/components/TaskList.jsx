import { List } from "antd";
import TaskItem from "./TaskItem";
import React, { useContext } from "react";
import { TasksContext } from "./TasksContext";
function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <List
      size="small"
      bordered
      dataSource={tasks}
      renderItem={(task) => (
        <List.Item>
          <TaskItem key={task.id} task={task} />
        </List.Item>
      )}
    />
  );
}
export default TaskList;
