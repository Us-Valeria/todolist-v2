import React, { useState } from "react";
import { Button, Checkbox, Input, Typography, Form } from "antd";
import type { Task } from "../models/Task";
import { useTasks } from "../stores/useTasks";

const { Text } = Typography;

type Props = {
  task: Task;
};

function TaskItem({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const removeTask = useTasks((state) => state.removeTask);
  const changeTextTask = useTasks((state) => state.changeTextTask);
  const changeStatusTask = useTasks((state) => state.changeStatusTask);

  return (
    <>
      <Form layout="inline">
        <Form.Item>
          <Checkbox
            onChange={() => changeStatusTask(task.id)}
            checked={task.completed}
          />
        </Form.Item>
        {isEditing ? (
          <>
            <Form.Item>
              <Input
                type="text"
                value={task.text}
                onChange={(e) => changeTextTask(e.target.value, task.id)}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" onClick={() => setIsEditing(false)}>
                Сохранить
              </Button>
            </Form.Item>
          </>
        ) : (
          <>
            <Form.Item>
              <Text>{task.text}</Text>
            </Form.Item>
            <Form.Item>
              <Button onClick={() => setIsEditing(true)}>Редактировать</Button>
            </Form.Item>
          </>
        )}
        <Form.Item>
          <Button onClick={() => removeTask(task.id)}>Удалить</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default TaskItem;
