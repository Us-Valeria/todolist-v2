import React, { useState } from "react";
import { Checkbox, Typography, List } from "antd";
import type { Task } from "../models/Task";
import { useTasks } from "../stores/useTasks";
import TaskForm from "./TaskForm";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

type Props = {
  task: Task;
};

const { Text } = Typography;

function TaskItem({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const removeTask = useTasks((state) => state.removeTask);
  const changeTextTask = useTasks((state) => state.changeTextTask);
  const changeStatusTask = useTasks((state) => state.changeStatusTask);

  const onFinishForm = () => setIsEditing(false);
  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeTextTask(e.target.value, task.id);

  return (
    <List.Item
      actions={[
        <Checkbox
          key="edit-status-task"
          onChange={() => changeStatusTask(task.id)}
          checked={task.completed}
        />,
        <EditOutlined key="edit-task" onClick={() => setIsEditing(true)} />,
        <DeleteOutlined
          key="remove-task"
          onClick={() => removeTask(task.id)}
        />,
      ]}
    >
      {isEditing ? (
        <TaskForm
          onFinish={onFinishForm}
          value={task.text}
          onChange={onChangeForm}
        />
      ) : (
        <List.Item.Meta title={<Text>{task.text}</Text>} />
      )}
    </List.Item>
  );
}

export default TaskItem;
