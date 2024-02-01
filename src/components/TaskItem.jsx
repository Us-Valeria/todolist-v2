import React, { useContext, useState } from "react";
import { Button, Checkbox, Input, Typography } from "antd";
import { TasksDispatchContext } from "./TasksContext";

const { Text } = Typography;

function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <Checkbox checked={task.completed} />
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
            id: task.id,
          })
        }
      >
        Удалить
      </Button>
    </>
  );
}

export default TaskItem;
