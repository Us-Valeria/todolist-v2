import React, { useContext, useState } from "react";
import { Button, Checkbox, Input, Typography } from "antd";
import { TasksDispatchContext } from "./TasksContext";
import type { CheckboxProps } from "antd";
import type { Task } from "./Task";

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
        <Checkbox onChange={onChange} />
        {isEditing ? (
          <>
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
            <Button onClick={() => setIsEditing(false)}>Сохранить</Button>
          </>
        ) : (
          <>
            <Text>{task.text}</Text>
            <Button onClick={() => setIsEditing(true)}>Редактировать</Button>
          </>
        )}
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
      </>
    )
  );
}

export default TaskItem;
