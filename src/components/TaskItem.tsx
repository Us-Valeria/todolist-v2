import React, { useState } from "react";
import { Button, Checkbox, Typography } from "antd";
import type { Task } from "../models/Task";
import { useTasks } from "../stores/useTasks";
import TaskForm from "./TaskForm";

type Props = {
  task: Task;
};

const { Text } = Typography;

function TaskItem({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const removeTask = useTasks((state) => state.removeTask);
  const changeTextTask = useTasks((state) => state.changeTextTask);
  const changeStatusTask = useTasks((state) => state.changeStatusTask);

  const onFinishForForm = () => setIsEditing(false);
  const onChangeForForm = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeTextTask(e.target.value, task.id);

  return (
    <>
      <Checkbox
        onChange={() => changeStatusTask(task.id)}
        checked={task.completed}
      />

      {isEditing ? (
        <TaskForm
          onFinish={onFinishForForm}
          value={task.text}
          onChange={onChangeForForm}
        />
      ) : (
        <>
          <Text>{task.text}</Text>
          <Button
            onClick={() => setIsEditing(true)}
            style={{ position: "absolute", right: "22%" }}
          >
            Редактировать
          </Button>
        </>
      )}
      <Button onClick={() => removeTask(task.id)}>Удалить</Button>
    </>
  );
}

export default TaskItem;
