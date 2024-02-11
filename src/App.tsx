import { Typography } from "antd";
import React from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { TasksProvider } from "./components/TasksContext";

const { Title } = Typography;

function App() {
  return (
    <TasksProvider>
      <Title>Список задач:</Title>
      <AddTaskForm />
      <TaskList />
    </TasksProvider>
  );
}

export default App;
