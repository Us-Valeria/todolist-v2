import { List } from "antd";
import TaskItem from "./TaskItem";
import React from "react";

function TaskList({ tasks, remove }) {
  return (
    <List
      size="small"
      bordered
      dataSource={tasks}
      renderItem={(task, index) => (
        <List.Item>
          <TaskItem
            key={task.id}
            task={task}
            number={index + 1}
            remove={remove}
          />
        </List.Item>
      )}
    />
  );
}
export default TaskList;
