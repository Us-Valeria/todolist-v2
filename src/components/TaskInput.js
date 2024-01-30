import { Button, Input } from "antd";
import { useState } from "react";
import React from "react";

function TaskInput({ create }) {
  const [task, setTask] = useState("");
  const addTask = () => {
    if (!task.item.trim()) return;
    const newTask = {
      ...task,
      id: Date.now(),
      completed: false,
    };
    create(newTask);
    setTask("");
  };
  return (
    <div>
      <Input
        type="text"
        value={task.item}
        placeholder="Введите задачу..."
        onChange={(e) => setTask({ ...task, item: e.target.value })}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            addTask();
            setTask("");
          }
        }}
      />
      <Button
        onClick={() => {
          addTask();
          setTask("");
        }}
      >
        Добавить
      </Button>
    </div>
  );
}
export default TaskInput;
