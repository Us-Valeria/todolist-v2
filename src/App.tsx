import { Typography } from "antd";
import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import { TasksProvider } from "./components/TasksContext";

const { Title } = Typography;

function App() {
  return (
    <TasksProvider>
      <Title>Список задач:</Title>
      <TaskInput />
      <TaskList />
    </TasksProvider>
  );
}

export default App;
