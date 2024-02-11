import React, { useContext, useState } from "react";
import { Button, Checkbox, Input, Typography, Form } from "antd";
import { TasksDispatchContext } from "./TasksContext";
import type { CheckboxProps } from "antd";
import type { Task } from "../models/Task";

const { Text } = Typography;

type Props = {
  task: Task;
};

function TaskItem({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  const onChange: CheckboxProps["onChange"] = () => {
    dispatch &&
      dispatch({
        type: "changed",
        task: {
          ...task,
          completed: !task.completed,
        },
      });
  };

  return (
    dispatch && (
      <>
        <Form layout="inline">
          <Form.Item>
            <Checkbox onChange={onChange} />
          </Form.Item>
          {isEditing ? (
            <>
              <Form.Item>
                <Input
                  type="text"
                  value={task.text}
                  onChange={(e) => {
                    dispatch({
                      type: "changed",
                      task: {
                        ...task,
                        text: e.target.value,
                      },
                    });
                  }}
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
                <Button onClick={() => setIsEditing(true)}>
                  Редактировать
                </Button>
              </Form.Item>
            </>
          )}
          <Form.Item>
            <Button
              onClick={() =>
                dispatch({
                  type: "deleted",
                  task: {
                    ...task,
                    id: task.id,
                  },
                })
              }
            >
              Удалить
            </Button>
          </Form.Item>
        </Form>
      </>
    )
  );
}

export default TaskItem;
