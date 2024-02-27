import React, { useState } from "react";
import { useTasks } from "../stores/useTasks";
import TaskForm from "./TaskForm";

function AddTaskForm() {
  const addTask = useTasks((state) => state.addTask);
  const [textTask, setTextTask] = useState("");

  const onFinishForm = () => {
    addTask(textTask);
    setTextTask("");
  };

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTextTask(e.target.value);

  return (
    <div
      style={{
        marginTop: "32px",
        marginBottom: "24px",
      }}
    >
      <TaskForm
        placeholder={"Введите задачу..."}
        value={textTask}
        onFinish={onFinishForm}
        onChange={onChangeForm}
      />
    </div>
  );
}
export default AddTaskForm;
