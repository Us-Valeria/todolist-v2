import { Button, Input } from "antd";
import { useState, useContext } from "react";
import React from "react";
import { TasksDispatchContext } from "./TasksContext";

function TaskInput() {
  const [item, setItem] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  return (
    <div>
      <Input
        type="text"
        value={item}
        placeholder="Введите задачу..."
        onChange={(e) => setItem(e.target.value)}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            dispatch({
              type: "added",
              id: Date.now(),
              text: item,
            });
            setItem("");
          }
        }}
      />
      <Button
        onClick={() => {
          dispatch({
            type: "added",
            id: Date.now(),
            text: item,
          });
          setItem("");
        }}
      >
        Добавить
      </Button>
    </div>
  );
}
export default TaskInput;
