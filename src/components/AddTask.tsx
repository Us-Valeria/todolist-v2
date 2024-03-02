import React, { useState } from "react";
import { Button } from "antd";
import { useTasks } from "../stores/useTasks";
import TaskForm from "./TaskForm";

function AddTask() {
  const addTask = useTasks((state) => state.addTask);
  const [isAdd, setIsAdd] = useState(false);
  const [textTask, setTextTask] = useState("");

  const onFinishForm = () => {
    addTask(textTask);
    setTextTask("");
    setIsAdd(false);
  };
  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTextTask(e.target.value);
  return (
    <>
      {isAdd ? (
        <>
          <TaskForm
            onFinish={onFinishForm}
            value={textTask}
            onChange={onChangeForm}
          />
        </>
      ) : (
        <>
          <Button type="primary" onClick={() => setIsAdd(true)}>
            +
          </Button>
        </>
      )}
    </>
  );
}
export default AddTask;
