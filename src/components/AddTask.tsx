import React, { useState } from "react";
import { Button } from "antd";
import { useTasks } from "../stores/useTasks";
import TaskForm from "./TaskForm";

function AddTask() {
  const addTask = useTasks((state) => state.addTask);
  const [isAdd, setIsAdd] = useState(false);

  const onSave = (value: string) => {
    addTask(value);
    setIsAdd(!isAdd);
  };

  return isAdd ? (
    <TaskForm onSave={onSave} />
  ) : (
    <Button type="primary" onClick={() => setIsAdd(!isAdd)}>
      +
    </Button>
  );
}
export default AddTask;
