import { Typography } from "antd";
import React from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const { Title } = Typography;

function App() {
  return (
    <>
      <Title>Список задач:</Title>
      <AddTaskForm />
      <TaskList />
    </>
  );
}

export default App;
