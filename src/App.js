import { Typography } from "antd";
import { useState } from "react";
import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

const { Title } = Typography;

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const removeTask = (task) => {
    setTasks(tasks.filter((i) => i.id !== task.id));
  };
  return (
    <div className="App">
      <Title>Список задач:</Title>
      <TaskInput create={createTask} />
      <TaskList remove={removeTask} tasks={tasks} />
    </div>
  );
}

export default App;
